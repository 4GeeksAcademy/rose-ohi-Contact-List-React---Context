// Import necessary components from react-router-dom and other parts of the application.
import Adds from '../components/Adding';
import ContactsCombine from "./Layout";
// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer();

  /// Define the addContact function (also manages errors)
  const addContact = (contactData) => {
    try {
      console.log('Adding contact:', contactData); // Debug log
      
      // Dispatch an action to add the contact to your global state
      dispatch({
        type: 'ADD_CONTACT',
        payload: contactData
      });
      
      console.log('Contact added successfully'); // Debug log
    } catch (error) {
      console.error('Error could not add contact:', error);
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