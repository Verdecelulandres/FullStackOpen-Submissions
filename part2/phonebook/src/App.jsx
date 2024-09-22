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
    const newPerson = {name: newName, phone: newPhone};
    setPersons(persons.concat(newPerson));
    setNewName('');
  }
  //Change input handler
  const handleInputChange = (event) =>{
    event.target.name === 'name' ? setNewName(event.target.value) : setNewPhone(event.target.value);
   //console.log(event.target.name);
   // console.log(event.target.value);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input name="name" value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          phone: <input name="phone" value={newPhone} onChange={handleInputChange}/>
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