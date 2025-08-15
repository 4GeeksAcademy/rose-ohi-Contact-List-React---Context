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
    <ul >
      
      {contacts.map((contact, index) => (
        <li className="container ccard" key={index}>

           <div className="me-3"> <img 
          src={"https://picsum.photos/200" || contact.image} 
          width="200"
          height="200"
          style={{ borderRadius: '50%' }}
        /></div>

          <div className="me-3"><h1>{contact.name}</h1> </div> <br /> 
          {contact.address} <br />
          {contact.phone} <br />
          {contact.email} <br />

            <div className="container ">
              <button className="btn me-3 btn-danger col-sm" onClick={() => deleteContacts(contact.id)}> Delete</button> 
      
          {/* UPDATE button on contacts cards */}
              {/* <button onClick={() => updateContacts(contact.id)}> Update</button> */}
              <button className="btn me-3 btn-success col-sm" onClick={() => navigate(`/edit/${contact.id}`)}>Update</button>
       </div> 
       
       </li>
      ))}
    </ul>
  );
}

export default ContactList;
