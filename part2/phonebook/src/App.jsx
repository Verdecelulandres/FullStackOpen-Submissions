import { useState } from 'react'

const App = () => {
  //state variables
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]); 
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filtername, setFilterName] = useState('');

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
    const newPerson = {name: newName, phone: newPhone, id: persons.length + 1} ;
    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewPhone('');
  }
  //Change input handler
  const handleInputChange = (event) =>{
    if(event.target.name === 'name') {
      setNewName(event.target.value)
    }  else if(event.target.name === 'phone'){
      setNewPhone(event.target.value);
    } else {
      setFilterName(event.target.value);
    }
   //console.log(event.target.name);
   // console.log(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      Search a name: <input name="filter" value={filtername} onChange={handleInputChange}/>
      <h2>Add a new contact</h2>
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
      {persons.filter(person => person.name.toLowerCase().includes(filtername.toLowerCase())).map(person => <p key={person.id}>{person.name}: {person.phone}</p>)}
    </div>
  )
}

export default App;