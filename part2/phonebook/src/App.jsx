import { useState, useEffect } from 'react'
import contactService from './services/contacts';
import Notification from './components/Notification';
import Contacts from './components/Contacts';
import NewContact from './components/NewContact';
import Filter from './components/Filter';

const App = () => {
  //state variables
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filtername, setFilterName] = useState('');
  const [noticeMessage, setNoticeMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  //Gets the data from the server async. Is invoked when the page rendered for the 1st time
  useEffect(()=>{
    //console.log('Effect triggered. Means page finished rendering');
    contactService.getContacts().then(response => {
      console.log('Get response fulfilled');
      setPersons(response.data);
    })
  },[])

  //Returns true if any entry is duplicate, case insensitive
  const checkDuplicate = (newEntry) => { 
    return persons.some((person) => JSON.stringify(person.name.toLowerCase()) === JSON.stringify(newEntry.toLowerCase()) || JSON.stringify(person.number) === JSON.stringify(newEntry)) 
  }

  //Submit form handler
  const addPerson = (event) =>{
    event.preventDefault();
    //This ensures we cant add a just a name or just a phone
    if(newName === "" || newNumber === "") {
      return;
    }
    const newFormattedName = formatName(newName);
    const newPerson = {name: newFormattedName, number: newNumber} ;

    //We want to update the number of an existing contact using the put method
    if(checkDuplicate(newFormattedName)) {
      if(window.confirm(`Replace ${newFormattedName} number to ${newNumber} ?`)){
        const updateId = persons.find(p => p.name === newFormattedName).id
        console.log(`Id of the contact to be replaced: ${updateId}`);
        contactService.updateContact(updateId, newPerson)
          .then(response => {
            console.log('Put Fulfilled');
            //Set the contacts with the response data if the id matches, if not just copy the element
            setPersons(persons.map(p=> p.id === updateId ? response.data : p));
            setNewName('');
            setNewNumber('');
          })
          .catch(error => {
            console.log('Error catched!');
            setIsError(true);
            setNoticeMessage(`${newFormattedName} was already deleted from the server :(`);
            setTimeout(()=>{
              setIsError(false);
              setNoticeMessage(null);
            }, 5000);
          })
          setPersons(persons.filter(p => p.name !== newFormattedName));
      }
      return;
    }
    //Adding a new contact to the server. This returns the newly added contact in the response data
    contactService.addNewContact(newPerson)
      .then(response => {
        console.log('post promise fulfilled');
        setNoticeMessage(`${newPerson.name} was added to your contacts`);
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
        setTimeout(()=> {
          setNoticeMessage(null);
        }, 5000);
      })
    
  }
  //Change input handler
  const handleInputChange = (event) =>{
    if(event.target.name === 'name') {
      setNewName(event.target.value)
    }  else if(event.target.name === 'number'){
      setNewNumber(event.target.value);
    } else {
      setFilterName(event.target.value);
    }

  }

  //function to ensure New names are added in a certain format
  const formatName = (name) =>{
    let newName = name.toLowerCase().trim();
    newName = name.charAt(0).toUpperCase() + newName.substring(1);
    //We scan the string to capitalize the letter after each space found
    for(let i = 1; i<newName.length; i++) {
      if(newName.charAt(i) === ' '){
        newName = newName.substring(0, i+1) + newName.charAt(i+1).toUpperCase() + (i+2 >= newName.length ? '' : newName.substring(i+2))
      }
    }
    console.log(newName);
    return newName;
  }

  //delete contacts
  const deleteTargetContact = (id) => {
    const personToDelete = persons.find(p => p.id === id).name;
    console.log(`This should delete the contact with id ${id}`);
    if(window.confirm(`This will delete ${personToDelete} is that okay?`)){
      contactService.deleteContact(id).then(response => {
        console.log('Delete Fulfilled');
        console.log(response);
        //Create a new array filtering the recently delted contact id out
        setPersons(persons.filter(p => p.id !== id));
      });
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification error={isError} message={noticeMessage}/>
      <Filter filtername={filtername} handleInputChange={handleInputChange}/>
      <h2>Add a new contact</h2>
      <NewContact addPerson={addPerson} handleInputChange={handleInputChange} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      {/**We only pass the reference to the deletecontact function because we want to send the execution to the component that maps the contacts */}
      <Contacts persons={persons} filtername={filtername} deleteContact={deleteTargetContact}/>
    </div>
  )
}

export default App;
