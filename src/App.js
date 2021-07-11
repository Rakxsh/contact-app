import React from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import './App.css';
import { useState, useEffect } from 'react';
import {uuid} from 'uuidv4';




function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,{id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

     useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts)

  },[]);

  useEffect(()=>{

    localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify(contacts));

  },[contacts]);





  return (
    <div>
   <Header/>
   <AddContact addContactHandler={addContactHandler}/>
   <ContactList contacts={contacts} getContactId={removeContactHandler}/>
   </div>
    
  );
}

export default App;
