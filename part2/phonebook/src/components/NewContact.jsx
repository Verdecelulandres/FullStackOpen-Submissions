import SingleInput from './SingleInput';

const NewContact = ({addPerson, handleInputChange, newName, newNumber}) => {
    return(
        <form onSubmit={addPerson}>
            <SingleInput name="name" value={newName} handleInputChange={handleInputChange}/>
            <SingleInput name="number" value={newNumber} handleInputChange={handleInputChange}/>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default NewContact;