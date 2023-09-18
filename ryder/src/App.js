import React from "react";
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing_page/landingPage";
import Passwordreset from "./components/passwordresets/passwordreset";
import Passwordresetverification from "./components/passwordresets/Passwordresetverification.jsx";
// Import require Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/landingPage.css";
import "../src/styles/dashboard.css";
import RyderEarnings from "./components/ryderEarnings/earnings";
// import IncomingRequest from "./components/orderStatus/incomingRequest";
// import RequestAccepted from "./components/orderStatus/requestAccepted";
// import OrderCompleted from "./components/orderStatus/orderCompleted";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/earnings" element={<RyderEarnings/>}/>
          <Route path="/passwordreset" exact element={<Passwordreset />} />
          <Route path="/passwordresetverification" exact element={<Passwordresetverification/>} />
        </Routes>
     
      </div>
    </Router>
    
   
    
  );
}

export default App;
