import ContactDetails from "./ContactDetails";
const Contacts = ({persons, filtername}) => {
    return (persons.filter(person => person.name.toLowerCase().includes(filtername.toLowerCase())).map(person => <ContactDetails key={person.id} name={person.name} number={person.number}/>))
}

export default Contacts;