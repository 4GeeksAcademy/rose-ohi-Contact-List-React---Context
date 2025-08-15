//globalfunctions

import useGlobalReducer from "./useGlobalReducer";

const useActions = () => {
    //all fetch method/functions must be within the scope/curly brackets

    const { store, dispatch } = useGlobalReducer()

    const getContacts = async () => {// GET - acces store and switch case; updates list view after mod
        const response = await fetch("https://playground.4geeks.com/contact/agendas/rose-ohi/contacts")

        const data = await response.json()

        dispatch({ type: "SET_CONTACTS", payload: data.contacts })

        return
    }

    // PUT method - Updates singular contact****
    const updateContacts = async (contactData, contact_id) => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/rose-ohi/contacts/${contact_id}`,

            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(contactData)
            }
        )

        const data = await response.json()

        getContacts() //updates the contacts datA 

        return

    }


    //DELETEs via contactId
    const deleteContacts = async (contact_id) => {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/rose-ohi/contacts/${contact_id}`,

            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', }
            })

       // const data = await response.json()

        getContacts() // gets new list of contacts


        return

    }

    return {
        //Must put all functions in this return

        getContacts,
        updateContacts,
        deleteContacts

    }
}

export default useActions;