
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} 
from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import EditContactsPg from "./pages/EditContacts";

export const router = createBrowserRouter(
    createRoutesFromElements(
   
    // Create routes , if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
   
      // Root Route: All navigation will start from here.
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path="/single/:theId" element={ <Single />} />  {/* Dynamic route for single items */}
        <Route path="/demo" element={<Demo />} />
        <Route path="/edit/:id" element={<EditContactsPg />} />
      </Route>
    )
);