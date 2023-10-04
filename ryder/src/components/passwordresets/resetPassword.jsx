import React from "react";
import styled from "styled-components";

import Bike from "../../images/Bike.svg";
import RyderLogo from "../../images/Ryder-Logo.svg";

// Create a styled component for ResetPassword
const ResetPasswordContainer = styled.div`
  font-family: "Inter", sans-serif;
`;

// Create a styled component for input
const StyledInput = styled.input`
  width: 396px;
  height: 48px;
  padding: 9px 16px 8px 16px;
  border-radius: 6px;
  border: 1px solid;
  gap: 16px;
  opacity: 0.8;
`;

const ResetPassword = () => {
  const secondDivStyle = {
    width: "600px",
    height: "456px",
    top: "85px",
    left: "894px",
    gap: "80px"
  };

  const h1Style = {
    width: "444px",
    height: "234px",
    color: "#FFFFFF",
    fontSize: "32px",
    fontWeight: "700",
    lineHeight: "48px",
    letterSpacing: "0em"
  };

  return (
    <ResetPasswordContainer>
      <div className="row">
        <div
          className="col-md-6"
          style={{
            backgroundImage: `url(${Bike})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            position: "relative"
          }}
        >
          <div style={h1Style}>
            Delivery service just got easier, elegant & superb with{" "}
            <span style={{ color: "#FB8500" }}>Ryder</span>
          </div>
        </div>

        <div
          className="col-md-6 d-flex align-items-center justify-content-center"
          style={secondDivStyle}
        >
          <div>
            <img
              src={RyderLogo}
              alt="ryder-img"
              className="img-fluid mb-5 mt-5"
            />
            <p className="mb-4 fw-bold fs-5">Reset Password</p>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">
                New Password
              </label>
              <StyledInput
                type="password"
                className="form-control"
                id="newPassword"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <StyledInput
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Re-Enter your password"
              />
            </div>
            <button>Reset Password</button>
          </div>
        </div>
      </div>
    </ResetPasswordContainer>
  );
};

export default ResetPassword;
