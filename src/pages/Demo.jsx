//MAIN contacts Adding contacts Page
import Adds from '../components/Adding';
// import ContactsCombine from "./Layout";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

import useActions from '../hooks/useActions';

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  const {getContacts} = useActions(); //defining the getContacts function that was imported from useActions object(full of functions) & .js file. 
  //this is the same as useActions.getContacts()

  /// Defines addContact function (also manages errors)
  const addContact = async (contactData) => {
    try {
      console.log('Adding contact:', contactData); 
      
      // Make POST request to API
      const response = await fetch('https://playground.4geeks.com/contact/agendas/rose-ohi/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Contact added to successfully(API)', result); //ontact added to API successfully

      getContacts()  //call that renders newest list

      console.log('Contact added successfully'); //Contact added to global state successfully
    } catch (error) {
      alert('ERROR: could not add contact. Please try again.');
    }
  };

  return (
    <div className="container">
      <Adds onAddContact={addContact} />

      <br />

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};