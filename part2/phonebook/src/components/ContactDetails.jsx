const ContactDetails = ({name, number, deleteContact}) => {
    return(
        <div>
            <p>{name}: {number} <button onClick={deleteContact}>Delete</button></p> 
        </div>
    )
}

export default ContactDetails;