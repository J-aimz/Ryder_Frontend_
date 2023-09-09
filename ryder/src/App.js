import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/landingPage/AppNavbar";
import LandingPage from "./components/landingPage/LandingPage";
//import AboutPage from "./AboutPage";
//import ServicesPage from "./ServicesPage";
//import ContactPage from "./ContactPage";
//import LoginPage from "./LoginPage";
import Footer from "./components/landingPage/Footer";

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Routes>
          <Route path="/" exact component={LandingPage} />
          {/* <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={LoginPage} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
