import React from "react";
import "../styles/ConfirmEmail.css";
import Email from "../images/Email.svg";

const ConfirmEmail = () => {
  return (
    <div className="email-verification">
      <div className="frame-wrapper">
        <div className="frame">
          <img className="vector" alt="Vector" src={Email} />
          <div className="text-wrapper">Check your mail</div>
          <p className="div">
            We sent a password reset link to your email. Please click the link
            to reset your password
          </p>
          <p className="didn-t-receive-the">
            <span className="span">Didn’t receive the email? </span>
            <button className="text-wrapper-2">Click to Resend link </button>
          </p>
          <div className="div-wrapper">
            <button className="text-wrapper-3">Back to Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
