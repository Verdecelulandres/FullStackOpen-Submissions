const ContactDetails = ({name, phone}) => <p>{name}: {phone}</p>
const Contacts = ({persons, filtername}) => {
    return (persons.filter(person => person.name.toLowerCase().includes(filtername.toLowerCase())).map(person => <ContactDetails key={person.id} name={person.name} phone={person.phone}/>))
}

export default Contacts;