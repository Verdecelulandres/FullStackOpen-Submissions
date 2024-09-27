import { useState, useEffect } from 'react'
import contactService from './services/contacts';
import Contacts from './components/Contacts';
import NewContact from './components/NewContact';
import Filter from './components/Filter';

const App = () => {
  //state variables
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filtername, setFilterName] = useState('');

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
    if(checkDuplicate(newName)|| checkDuplicate(newNumber)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {name: newName, number: newNumber, id: persons.length + 1} ;
    //Adding a new contact to the server. This returns the newly added contact in the response data
    contactService.addNewContact(newPerson)
      .then(response => {
        console.log('post promise fulfilled');
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filtername={filtername} handleInputChange={handleInputChange}/>
      <h2>Add a new contact</h2>
      <NewContact addPerson={addPerson} handleInputChange={handleInputChange} newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Contacts persons={persons} filtername={filtername} />
    </div>
  )
}

export default App;
