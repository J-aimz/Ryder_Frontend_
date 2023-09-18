import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./pages/landing_page/footer";
import Passwordreset from "./components/passwordresets/passwordreset";
import Passwordresetverification from "./components/passwordresets/Passwordresetverification.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/landingPage.css";
import "../src/styles/dashboard.css";

//pages
import { CustomerDashBoard, RequestRiderForm, LandingPage, RiderDashboard } from './pages';

//components
import { AppNavbar } from "./components"

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        {/* <UserNavbar />
        <RiderNavbar /> */}
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="dashboard" element={<CustomerDashBoard />} />
          <Route path="request-form" element={<RequestRiderForm />} />
          <Route path="ryder-dasboard" element={<RiderDashboard />} />
          <Route path="/passwordreset" exact element={<Passwordreset />} />
          <Route path="/passwordresetverification" exact element={<Passwordresetverification/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
    
  );
}

export default App;
