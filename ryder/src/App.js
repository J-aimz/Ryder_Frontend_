import React from "react";
 import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing_page/landingPage";
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
          <Route path="/earnings" element={<RyderEarnings/>}/>
        </Routes>      
      </div>
    </Router>
  );
}

export default App;
