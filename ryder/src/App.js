import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/landing_page/appNavbar";
import LandingPage from "./components/landing_page/landingPage";
import Footer from "./components/landing_page/footer";
import CustomerSignUp from "./components/sign_page/customerSignUp";
import RiderSignUp from "./components/sign_page/riderSignUp";

// Import require Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/landingPage.css";

function App() {
  return (

    <Router>
      <div>
        <AppNavbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/customerSignUp" exact element={<CustomerSignUp />} />
          <Route path="/riderSignUp" exact element={<RiderSignUp />} />
        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
