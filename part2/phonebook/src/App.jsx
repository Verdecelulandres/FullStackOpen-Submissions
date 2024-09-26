import { useState, useEffect } from 'react'
import axios from 'axios';
import Contacts from './components/Contacts';
import NewContact from './components/NewContact';
import Filter from './components/Filter';

const App = () => {
  //state variables
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filtername, setFilterName] = useState('');

  useEffect(()=>{
    console.log('Effect triggered. Means page finished rendering');
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('Response fulfilled');
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
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
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
   //console.log(event.target.name);
   // console.log(event.target.value);
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
//{persons.filter(person => person.name.toLowerCase().includes(filtername.toLowerCase())).map(person => <p key={person.id}>{person.name}: {person.phone}</p>)}
export default App;

// Original data
// { name: 'Arto Hellas', phone: '040-123456', id: 1 },
//     { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
//     { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
//     { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }