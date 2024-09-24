import SingleInput from './SingleInput';

const NewContact = ({addPerson, handleInputChange, newName, newPhone}) => {
    return(
        <form onSubmit={addPerson}>
            <SingleInput name="name" value={newName} handleInputChange={handleInputChange}/>
            <SingleInput name="phone" value={newPhone} handleInputChange={handleInputChange}/>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default NewContact;