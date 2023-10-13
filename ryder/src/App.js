import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import CustomerSignUp from "./components/sign_page/customerSignUp";
import RiderSignUp from "./components/sign_page/riderSignUp";
import Passwordreset from "./components/passwordresets/passwordreset";
import Passwordresetverification from "./components/passwordresets/Passwordresetverification.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/landingPage.css";
import "../src/styles/dashboard.css";
import { CustomerDashBoard, RequestRiderForm, LandingPage, RiderDashboard, RyderEarnings } from './pages';
import ConfirmEmail from "./components/ConfirmEmail";

function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/customer-dashboard" element={<CustomerDashBoard />} />
          <Route path="/request-form" element={<RequestRiderForm />} />
          <Route path="/ryder-dasboard" element={<RiderDashboard />} />
          <Route path="/earnings" element={<RyderEarnings/>}/>
          <Route path="/customerSignUp" element={<CustomerSignUp />} />
          <Route path="/riderSignUp" element={<RiderSignUp />} />
          <Route path="/passwordreset" element={<Passwordreset />} />
          <Route path="/passwordresetverification" element={<Passwordresetverification/>} />
          <Route path="/confirmEmail" element={<ConfirmEmail />} />
        </Routes>
y
      </div>
    </Router>    
  );
}

export default App;
