import axios from "axios";

const baseUrl = 'http://localhost:3001/persons';

const getContacts = () => axios.get(baseUrl);

const addNewContact = (newPerson) => axios.post(baseUrl, newPerson);

const deleteContact = (id) => axios.delete(`${baseUrl}/${id}`);

const updateContact = (id, newPerson) => axios.put(`${baseUrl}/${id}`, newPerson);

export default {getContacts, addNewContact, deleteContact}