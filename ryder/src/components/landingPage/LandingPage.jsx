import React from "react";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

import bgImage from "../../images/slider-bg-img.svg";

const LandingPage = () => {
  return (
    <div>
      <AppNavbar />

      {/* First Section */}
      <section
        className="bg-image"
        style={{
          backgroundImage: { bgImage },
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <div>
          <h1 className="text-light">
            Fast, Reliable & Quality Dispatch Service
          </h1>
          <p className="text-light">Send. Track. Receive.</p>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary me-2">
              Register as a Customer
            </button>
            <button className="btn btn-secondary">Register as a Rider</button>
          </div>
        </div>
      </section>

      {/* Content for the remaining sections will be added here */}

      <Footer />
    </div>
  );
};

export default LandingPage;
