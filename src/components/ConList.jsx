// my contact list singular cards format
import React from 'react';
import Adds from './Adding'
import useActions from '../hooks/useActions'; // allows me to use/call the functions w/in the useActions object
import { useNavigate } from 'react-router-dom';


// layout for output of the contacts
function ContactList({ contacts }) {

  const { deleteContacts } = useActions(); //destructuring - breaking down- calling/using parts of the useActions object 
  const { updateContacts } = useActions();

  const navigate = useNavigate(); // for updateC

  return (
    <ul>
      
      {contacts.map((contact, index) => (
        <li key={index}>
          <h1>{contact.name}</h1> <br />
          {contact.address} <br />
          {contact.phone} <br />
          {contact.email} <br />

          <button onClick={() => deleteContacts(contact.id)}> Delete</button>
          {/* UPDATE button on contacts cards */}
          {/* <button onClick={() => updateContacts(contact.id)}> Update</button> */}
          <button onClick={() => navigate(`/edit/${contact.id}`)}>Update</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
