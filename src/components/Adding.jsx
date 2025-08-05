    import React, { useState } from 'react';
    import ContactList from './ConList';

    function Adds({ onAddContact }) {
      const [name, setName] = useState('');
      const [phone, setPhone] = useState('');
      const [email, setEmail] = useState('');
      const [locate, setLocate] = useState('');


      const handleSubmit = (e) => {
        e.preventDefault();
        if (name && phone && email && locate) {
          onAddContact({ name, phone, email, locate });
          setName('');
          setPhone('');
          setEmail('');
          setLocate('');
        }
      };

      //renders contact form input fields on site
      return (


        <form onSubmit={handleSubmit}>
<div className="ainputs container">
            <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /> 
          
          <input
            type="text"
            placeholder="Address"
            value={locate}
            onChange={(e) => setLocate(e.target.value)}
          />
        
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /> 
          
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
</div>
          <br />
          <button class="mt-2" type="submit">Add New Contact</button>
        </form>
      );
    }

    export default Adds;