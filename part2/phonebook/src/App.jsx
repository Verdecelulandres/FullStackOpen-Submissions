import { useState } from 'react'

const App = () => {
  //state variables
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]); 
  const [newName, setNewName] = useState('');

  //Returns true if any entry is duplicate, case insensitive
  const checkDuplicate = (newEntry) => persons.some((person) => JSON.stringify(person.name.toLowerCase()) === JSON.stringify(newEntry.toLowerCase()))

  //Submit form handler
  const addPerson = (event) =>{
    event.preventDefault();
    if(checkDuplicate(newName)) {
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
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App;