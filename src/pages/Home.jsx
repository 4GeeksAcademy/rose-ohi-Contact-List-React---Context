// main Home Page - w/ rendered contacts (from store)
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactList from "../components/ConList.jsx";
import { useEffect } from "react";
import useActions from "../hooks/useActions.js";//import useActions


export const Home = () => {

  const {store, dispatch} = useGlobalReducer()

  const {getContacts} = useActions() //destructure to define getContacts

	 const createUser = async() => { //POST request to create a agenda/user where the contact info can be stored for the site

		//POST create  this user automatically when running appl
	const response = await fetch("https://playground.4geeks.com/contact/agendas/rose-ohi", { 

		method: "POST", 
		headers: {

			"Content-Type":"application/json"
		}
	})
	const data = await response.json()

	getContacts() //auto calls GET - gets contacts that are stored for that user, when my app is opened

	return data

 }

 	useEffect(() => {

		createUser()  //calls POST 
	}, [])

	return (
		<div className="text-center mt-5">
			<h1>CONTACT LIST</h1>
		 {/* Passes contacts from global store */}
      		<ContactList contacts={store.contacts || []} />
		
		</div>
	);
}; 