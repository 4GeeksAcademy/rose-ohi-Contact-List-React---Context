    import React, { useState } from 'react';
    import ContactList from './ConList';

    function Adds({ onAddContact }) {
      const [name, setName] = useState('');
      const [phone, setPhone] = useState('');
      const [email, setEmail] = useState('');
      const [address, setAddress] = useState('');


      const handleSubmit = (e) => {
        e.preventDefault();
        if (name && phone && email && address) {
          onAddContact({ name, phone, email, address });
          setName('');
          setPhone('');
          setEmail('');
          setAddress('');
        }
      };

      //renders contact form input fields on site
      return (


        <form onSubmit={handleSubmit}>
<div className="ainputs container text-center">

<h1>ADD A New Contact</h1>
            <input
            className="me-3"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> 
          
          <input
            className="me-3"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        
          <input
            className="me-3"
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /> 
          
          <input
            className="me-3 mt-3"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
</div>
          <br />
          <button className="btn btn-warning mt-2" type="submit">Add New Contact</button>

          {/* Add onClick calls POST/updateUser method/f(x) */}
        </form>
      );
    }

    export default Adds;