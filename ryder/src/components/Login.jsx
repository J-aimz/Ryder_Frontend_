import React from "react";
import '../styles/Login.css'
import Bike from '../images/Bike.svg'
import Logo from '../images/RyderLogo.svg'
import Email from '../images/Email.svg'
import password from '../images/Password.svg'

const Login = () => {
  return (
    <div className="login">
      <div className="div">
        <div className="frame">
          <div className="overlap-group">
            <img className="image" alt="Image" src={Bike} />
            <div className="rectangle" />
            <p className="delivery-service">
              <span className="text-wrapper">
                Delivery service just got
                <br />
                easier, elegant &amp; superb
                <br />
                with{" "}
              </span>
              <span className="span">Ryder</span>
              <span className="text-wrapper">&nbsp;&nbsp;</span>
            </p>
          </div>
        </div>
        <div className="frame-2">
          <div className="logo">
            <img
              className="mdi-delivery-dining"
              alt="Mdi delivery dining"
              src={Logo}
            />
            <div className="text-wrapper-2">Ryder</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-3">Login</div>
            <div className="frame-3">
              <div className="frame-4">
                <div className="frame-5">
                  <div className="frame-5">
                    <div className="frame-5">
                      <div className="frame-6">
                        <div className="text-wrapper-4">Email</div>
                        <div className="frame-7">
                          <img className="icon" alt="Icon" src={Email} />
                          <div className="text-wrapper-5">Enter your email</div>
                        </div>
                      </div>
                      <div className="frame-6">
                        <div className="text-wrapper-4">Password</div>
                        <div className="frame-8">
                          <img
                            className="vector"
                            alt="Vector"
                            src={password}
                          />
                          <div className="text-wrapper-5">
                            Enter your password
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-wrapper-6">Forgot password?</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-7">Login</div>
                </div>
              </div>
              <p className="don-t-have-an">
                <span className="text-wrapper-8">Don’t have an account? </span>
                <span className="text-wrapper-9">Create account</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
