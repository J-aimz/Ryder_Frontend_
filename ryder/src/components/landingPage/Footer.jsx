import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGoogle
} from "react-icons/fa";

import { dispatchBuddy } from "../../images";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        {/* First div */}
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex align-items-center">
              <img src={dispatchBuddy} alt="Dispatch Buddy" className="mr-2" />
              <p className="mb-0">Dispatch Buddy</p>
            </div>
          </div>
          <div className="col-md-4">
            <p>Home</p>
            <p>About Us</p>
            <p>FAQ</p>
            <p>Contact Us</p>
          </div>
          <div className="col-md-4">
            <div className="d-flex">
              <FaFacebookSquare className="mr-3" />
              <FaTwitterSquare className="mr-3" />
              <FaLinkedin className="mr-3" />
              <FaGoogle />
            </div>
          </div>
        </div>

        {/* Second div */}
        <div className="row mt-4">
          <div className="col-md-4">
            <p>© 2022 All rights reserved</p>
          </div>
          <div className="col-md-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Legal</p>
            <p>Help</p>
          </div>
          <div className="col-md-4">
            <p>English version</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
