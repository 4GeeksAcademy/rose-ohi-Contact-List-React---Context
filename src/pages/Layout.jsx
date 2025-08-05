import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import ContactList from '../components/ConList';
import useGlobalReducer from "../hooks/useGlobalReducer";

function ContactsCombine() {
  // Use global state instead of local state
  const { store } = useGlobalReducer();

  return (
    <div className="contactscomb container">
      {/* Passes contacts from global store */}
      <ContactList contacts={store.contacts || []} />

      
    </div>
  );
}

export default ContactsCombine;


export const Layout = () => {
  return (
    <ScrollToTop>
      <Navbar />
      <Outlet />
      <ContactsCombine />
      <Footer />
    </ScrollToTop>
  )
}