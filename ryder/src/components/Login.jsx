import React from "react";
import "../styles/Login.css";
import Bike from "../images/Bike.svg";
import Logo from "../images/RyderLogo.svg";
import Email from "../images/Email.svg";
import password from "../images/Password.svg";

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
            
              <div className="frame-4">
                <div className="frame-5">

                  <div className="frame-6">
                    <div className="text-wrapper-4">Email</div>
                    <div className="frame-7">
                      <img className="icon" alt="Icon" src={Email} />
                      <input
                        className="input"
                        placeholder="Enter your email"
                      ></input>
                    </div>
                  </div>

                  <div className="frame-6">
                    <div className="text-wrapper-4">Password</div>
                    <div className="frame-8">
                      <img className="vector" alt="Vector" src={password} />
                      <input
                        className="input"
                        placeholder="Enter your password"
                      ></input>
                    </div>
                  </div>
                  <button className="text-wrapper-6">Forgot password?</button>
                </div>

                <div className="div-wrapper">
                  <button className="text-wrapper-7">Login</button>
                </div>
              </div>

              <p className="don-t-have-an">
                <span className="text-wrapper-8">Don’t have an account? </span>
                <button className="text-wrapper-9">Create account</button>
              </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


//Codes to use when consuming Login API

// import React, { useState } from "react";
// import "../styles/Login.css";
// import Bike from "../images/Bike.svg";
// import Logo from "../images/RyderLogo.svg";
// import Email from "../images/Email.svg";
// import password from "../images/Password.svg";
// // import { useHistory } from "react-router-dom";
// // import axios from "axios";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useHistory();

//   const handleLogin = async () => {
//     try {
//       // Replace with your API endpoint for login
//       const response = await axios.post("/api/login", {
//         email,
//         password,
//       });

//       // Assuming your API returns a user object upon successful login
//       const user = response.data;

//       // Redirect to the next page (replace '/dashboard' with your desired route)
//       history.push("/dashboard");

//       // You can also store user data in state management (e.g., Redux or React Context)
//       // dispatch(setUser(user));
//     } catch (error) {
//       // Handle login error (e.g., show error message)
//       console.error("Login failed:", error);
//     }
//   };

//   return (
//     <div>
//       <div className="frame-6">
//         <div className="text-wrapper-4">Email</div>
//         <div className="frame-7">
//           <img className="icon" alt="Icon" src={Email} />
//           <input
//             className="input"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           ></input>
//         </div>
//       </div>

//       <div className="frame-6">
//         <div className="text-wrapper-4">Password</div>
//         <div className="frame-8">
//           <img className="vector" alt="Vector" src={password} />
//           <input
//             className="input"
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           ></input>
//         </div>
//       </div>

//       <button className="text-wrapper-7" onClick={handleLogin}>
//         Login
//       </button>

//       <p className="don-t-have-an">
//         <span className="text-wrapper-8">Don’t have an account? </span>
//         <button className="text-wrapper-9">Create account</button>
//       </p>
//     </div>
//   );
// };

// export default LoginForm;
