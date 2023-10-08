import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/passwordreset.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const [email, setemail] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  const [error, setError] = useState("");
  const isEmailValid = emailRegex.test(email);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  function successful(successMessage) {
    toast.success(successMessage, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  function failed(error) {
    toast.error(error, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!isEmailValid) {
        setError("Please enter a valid email address.");
        failed("Please enter a valid email address.");
        setSuccessMessage("");
        return;
      }
      const response = await axios.post(
        "https://ryder-test.onrender.com/api/v1/Authentication/forget-password",
        {
          email,
        }
      );

      if (!response.data.succeeded) {
        setSuccessMessage("");
        setError(response.data.message);
        console.log(response.data.message);
        failed("Email does not exist");
      } else {
        setError("");
        setSuccessMessage(response.data.message);
        console.log(response.data.message);
        successful("Password reset email sent successfully.");
      }
      setemail("");
      setTimeout(async () => {
        // Make sure your navigation logic works correctly.
        await navigate("/password-reset-verification");
      }, 6000); // 20,00
    } catch (error) {
      if (error.response) {
        setSuccessMessage("");
        console.error(error);
        failed("Please enter a valid email address.");
      } else {
        console.error(error);
        setError("Invalid Email Account");
        failed("Invalid Email Account");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="forgotpassword">
        <div className="holders">
          <form className="forgotpassword-form" action="">
            <div className="forgetpassword-container">
              <h1 className="text-one">Forget Password</h1>
              <p>
                Enter the email associated with your account and we will send an
                email with instruction to reset your password
              </p>
            </div>
            <div className="forget">
              <h5>Email</h5>
              <input
                className="form-control p-3"
                placeholder="Enter your email address"
                type="text"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <button className="forgotpassword-send" onClick={handleSubmit}>
                Reset password
              </button>
              {/* Display error message */}

              {error && (
                <div
                  className="form-holder"
                  style={{ color: "red", textAlign: "center" }}
                >
                  <small>
                    {" "}
                    <b style={{ color: "red" }}>{error}</b>{" "}
                  </small>
                </div>
              )}

              {/* Display success message */}

              {successMessage && (
                <div
                  className="form-holder"
                  style={{ color: "green", textAlign: "center" }}
                >
                  <small>
                    {" "}
                    <b style={{ color: "green" }}>{successMessage}</b>{" "}
                  </small>
                </div>
              )}

              {/* Display loading spinner  */}

              {loading && (
                <div className="form-holder" style={{ textAlign: "center" }}>
                  <small>Loading...</small>
                </div>
              )}
            </div>
          </form>
          <Link to="/login" className="redirect-login">
            Back to login
          </Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default ForgetPassword;
