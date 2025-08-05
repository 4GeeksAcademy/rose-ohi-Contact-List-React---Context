// my contact list
    import React from 'react';
   import Adds from './Adding'


    // layout for output of the contacts
    function ContactList({ contacts }) {
      return (
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
               <h1>{contact.name}</h1>
               <br/> 
               {contact.locate} <br />
               {contact.phone} <br />
               {contact.email} <br />
            </li>
          ))}
        </ul>
      );
    }

    export default ContactList;
