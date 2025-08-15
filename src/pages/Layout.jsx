import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import ContactList from '../components/ConList';
import useGlobalReducer from "../hooks/useGlobalReducer";



export const Layout = () => {
  return (
    <ScrollToTop>
      <Navbar />
      <Outlet />
     
      <Footer />
    </ScrollToTop>
  )
}