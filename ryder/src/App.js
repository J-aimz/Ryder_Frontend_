import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/landing_page/appNavbar";
import LandingPage from "./components/landing_page/landingPage";
import Footer from "./components/landing_page/footer";
// Import require Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/landingPage.css";
import UserNavbar from "./components/dashboard/userNavbar";
import RiderNavbar from "./components/dashboard/riderNavbar";

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <UserNavbar />
        <RiderNavbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
