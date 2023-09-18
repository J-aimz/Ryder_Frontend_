import React from "react";
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing_page/landingPage";
import Footer from "./components/landing_page/footer";
//import ConfirmEmail from "./components/ConfirmEmail";
import Login from "./components/Login";

import Passwordreset from "./components/passwordresets/passwordreset";
import Passwordresetverification from "./components/passwordresets/Passwordresetverification.jsx";
// Import require Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/landingPage.css";
import "../src/styles/dashboard.css";
import RyderEarnings from "./components/ryderEarnings/earnings";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/earnings" element={<RyderEarnings/>}/>
          <Route path="/passwordreset" exact element={<Passwordreset />} />
          <Route path="/passwordresetverification" exact element={<Passwordresetverification/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    
    
  );
}

export default App;
