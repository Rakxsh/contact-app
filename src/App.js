import React from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import './App.css';
import { useState, useEffect } from 'react';

import {uuid} from 'uuidv4';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import api from './api/contacts';





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
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrieveContacts) setContacts(retrieveContacts)

  },[]);

  useEffect(()=>{

    localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify(contacts));

  },[contacts]);





  return (
    <div>
      <Router>
   <Header/>
   <Switch>
   <Route path="/" exact  component={()=> <ContactList  contacts={contacts} getContactId={removeContactHandler} />} />
   <Route path="/add" component={()=> <AddContact addContactHandler={addContactHandler}/>} />
   </Switch>
   </Router>
   </div>
    
  );
}

export default App;
