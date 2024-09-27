import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

const getContacts = () => axios.get(baseUrl);

const addNewContact = (newPerson) => axios.post(baseUrl, newPerson);

export default {getContacts, addNewContact}