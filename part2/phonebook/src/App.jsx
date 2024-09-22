import { useState } from 'react'

const App = () => {
  //state variables
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ]); 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  //Returns true if any entry is duplicate, case insensitive
  const checkDuplicate = (newEntry) => { 
    return persons.some((person) => JSON.stringify(person.name.toLowerCase()) === JSON.stringify(newEntry.toLowerCase()) || JSON.stringify(person.phone) === JSON.stringify(newEntry)) 

  }

  //Submit form handler
  const addPerson = (event) =>{
    event.preventDefault();
    if(checkDuplicate(newName)|| checkDuplicate(newPhone)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {name: newName};
    setPersons(persons.concat(newPerson));
    setNewName('');
  }
  //Change input handler
  const handleNameChange = (event) =>{
    console.log(event.target.value);
    setNewName(event.target.value);
  }
  const handlePhoneChange = (event) =>{
    console.log(event.target.value);
    setNewPhone(event.target.value);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}: {person.phone}</p>)}
    </div>
  )
}

export default App;