import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./pages/landing_page/footer";
// Import require Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/landingPage.css";

//pages
import { CustomerDashBoard, RequestRiderForm, LandingPage } from './pages';

//components
import { AppNavbar } from "./components"

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="customer-dashboard" element={<CustomerDashBoard />} />
          <Route path="request-form" element={<RequestRiderForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
