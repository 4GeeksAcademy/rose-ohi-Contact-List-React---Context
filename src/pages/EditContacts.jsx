import React, { useState, useEffect } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer";
import useActions from "../hooks/useActions";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// const EditContactsPg = () => {

//     const { store, dispatch } = useGlobalReducer();
//     const { updateContacts } = useActions();

//     const { id } = useParams();

//     return (
//         <h1> Edit Contacts {id} </h1>
//     )
// }

// export default EditContactsPg
//=======================================



const EditContactsPg = () => {
  const { store } = useGlobalReducer();
  const { updateContacts } = useActions();
  const { id } = useParams();
  const navigate = useNavigate();

  const contactId = parseInt(id, 10);

  const existingContact = store.contacts.find(
    contact => contact.id === contactId
  );

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  useEffect(() => {
    if (existingContact) {
      setFormData({
        name: existingContact.name || '',
        phone: existingContact.phone || '',
        email: existingContact.email || '',
        address: existingContact.address || ''
      });
    }
  }, [existingContact]);
  console.log("Contacts in store:", store.contacts);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateContacts(formData, contactId);
    navigate('/'); //reroutes to the home after update
  };

  if (!existingContact) {
    return <p>Contact not found.</p>;
  }

  return (
    <div className="container text-center ">
      <h1>Edit Contact # {contactId}</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="me-3"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          className="me-3"
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />

        <input
          className="me-3"
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          className="me-3 mt-3"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        {/*  Update button for UI changes  */}
         {/* <Link to="/">  */}
             <button className="btn btn-warning mt-3" type="submit">Update Contact</button>
         {/* </Link>  */}
      </form>

   
    </div>
  );
};

export default EditContactsPg;