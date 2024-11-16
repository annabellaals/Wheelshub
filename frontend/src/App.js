// Main application file that sets up routing, page layouts, and conditional rendering
// of header, footer, and content wrappers based on the current route.

// Import React library
import React from "react";

// Import React Router for handling routes within the app
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Import shared components that will be displayed on multiple pages
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 

// Import pages for various routes
import Home from "./pages/Home"; 
import CreateListing from "./pages/CreateListing"; 
import SignupPage from "./pages/SignupPage"; 
import LoginPage from "./pages/LoginPage";
import ViewListing from "./pages/ViewListing"; 
import PlaceBid from "./pages/PlaceBid";
import NotFound from "./pages/404";
import Deals from "./pages/Deals";
import Bids from "./pages/Bids";
import About from "./pages/about";
import Contact from "./pages/contact";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Newsletter from "./pages/newsletter";
import Admin from "./pages/admin";

// Import PageWrapper to wrap main content on non-authentication pages
import PageWrapper from "./components/PageWrapper"; 

// Main content component that conditionally renders header, footer, and page content
const AppContent = () => {

  // Get the current route location
  const location = useLocation(); 

  // Check if the current page is an authentication page (e.g., /signup or /login)
  const isAuthPage = ["/signup", "/login"].includes(location.pathname);

  return <div>

      {/* Render the header only if the current page is not an authentication page */}
      { !isAuthPage && <Header /> }

      {/* Conditionally render content wrapped in PageWrapper if not on an auth page */}
      {
      
        isAuthPage ? 

          <Routes>

            {/* Route for signup page */}
            <Route path="/signup" element={<SignupPage />} /> 

            {/* Route for login page */}
            <Route path="/login" element={<LoginPage />} /> 

            {/* Not matched throw 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        
        : 
          <PageWrapper>

            <Routes>

              {/*  Route for home page */}
              <Route path="/" element={<Home />} /> 

              {/* Route for about page */}
              <Route path="/about" element={<About />} /> 

              {/* Contact page */}
              <Route path="/contact" element={<Contact />} /> 

              {/* Newsletter page */}
              <Route path="/newsletter" element={<Newsletter />} /> 

              {/* Route for privacy page */}
              <Route path="/privacy" element={<Privacy />} /> 

              {/* Terms page */}
              <Route path="/terms" element={<Terms />} /> 

              {/*  Route for create listing page */}
              <Route path="/create" element={<CreateListing />} />

              {/* Route for viewing a specific listing */}
              <Route path="/view/:id" element={<ViewListing />} /> 

              {/* Route for placing a bid on a specific listing */}
              <Route path="/bid/:id" element={<PlaceBid />} /> 

              {/* Route for viewing all deals */}
              <Route path="/deals" element={<Deals />} /> 

              {/* Route for viewing all bids */}
              <Route path="/bids" element={<Bids />} /> 

              {/* Route for admin page */}
              <Route path="/admin" element={<Admin />} /> 

              {/* Not matched throw 404 */}
              <Route path="*" element={<NotFound />} />

            </Routes>

          </PageWrapper>

      }

      {/* Render the footer only if the current page is not an authentication page */}
      {!isAuthPage && <Footer />}

  </div>
};

// Main app component that sets up the Router for route management
const App = () => {

  return <Router>

      <AppContent /> 

  </Router>
};

// Export the App component as the default export
export default App; 