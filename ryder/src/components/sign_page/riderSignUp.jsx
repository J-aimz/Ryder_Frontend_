import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignUpBanner from '../../images/RyderImg.svg';
import RyderLogo from '../../images/Ryder-Logo.svg';
import styles from '../../styles/signUp.module.css';
import 'react-toastify/dist/ReactToastify.css';
import mailLogo from '../../../src/images/icons/Email.png';
import Cloud from '../../../src/images/icons/Cloud.png';
import PasswordLogo from '../../../src/images/icons/Password.png';
 
//const apiKey = import.meta.env.VITE_APP_GMAP_API;
const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
//load google map api js
function loadAsyncScript(src) {
    return new Promise( resolve => {
        const script = document.createElement("script");
        Object.assign(script, {
            type: "text/javascript",
            async: true,
            src
        })
        script.addEventListener("load", () => resolve(script));
        document.head.appendChild(script);
    })
}

function RiderSignUp() {
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Email, setEmail] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [Longitude, setLongitude] = useState('');
    const [Latitude, setLatitude] = useState('');
    const [Country, setCountry] = useState('');
    const [BikeDocument, setBikeDocument] = useState(null);
    const [ValidIdUrl, setValidIdUrl] = useState('');
    const [PassportPhoto, setPassportPhoto] = useState('');
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const isPasswordValid = passwordRegex.test(Password);
    const isEmailValid = emailRegex.test(Email);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();





    
    //init gmap scrip
    const initMapScript = () => {
        if(window.google){
            return Promise.resolve();
        }
       // const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
       // return loadAsyncScript(src);
    }

    //load map script after mounted
    useEffect(() => {
        initMapScript().then(() => {
            console.log("map loaded", window.google)
        })
    }, [])









    const handleFileChange = (e, setFile, maxFileSize, setError) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
          if (selectedFile.size > maxFileSize) {
            setError(`File size exceeds ${maxFileSize / (1024 * 1024)}MB limit`);
            setFile(null);
          } else {
            setError(null);
            setFile(selectedFile);
          }
        }
    };
    const handlePhoneNumberChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, '');
        const limitedValue = numericValue.substring(0, 11);
        setPhoneNumber(limitedValue);
        if (limitedValue.length !== 11) {
            setError('Phone number must be exactly 11 digits.');
        } else { setError(''); }
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
  
        try {
            
            if (!isEmailValid) {
                setError('Please enter a valid email address.');
                setSuccessMessage('');
                return;
            }
            if (Password !== confirmPassword) {
                setError('Passwords do not match');
                setSuccessMessage('');
                return;
            }
  
            if (!isPasswordValid) {
                setError('Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.');
                setSuccessMessage('');
                return;
            }
           
            const response = await axios.post('https://localhost:7173/api/v1/Authentication/CreateRider/', {
                FirstName,
                LastName,
                Email,
                PhoneNumber,
                Password,
                City,
                State,
                Longitude,
                Latitude,
                Country,
                ValidIdUrl,
                PassportPhoto,
                BikeDocument
            });
           
            // Handle the response here, e.g., show a success message to the user.
            console.log(response.data);
            if (!response.data.succeeded) {
                 setSuccessMessage('');
                setError(response.data.data);
                // Display the error message 
            }
            else {
                setError(''); // Clear any previous error
                setSuccessMessage(response.data.data);
                localStorage.setItem('email', Email);
                navigate("/login");
            }
            // Clear input fields after successful registration
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setPassword('');
            setEmail('');
            setCity('');
            setState('');
            setLongitude('');
            setLatitude('');
            setCountry('');
            setValidIdUrl('');
            setPassportPhoto('');
            setBikeDocument('');
            setConfirmPassword('');
            setError('');
        }
        catch (error) {
            if (error.response) {
                setSuccessMessage('');
                setError(error.response.data.data); 
            }
            else {
                console.error(error);
                setError('An error occurred during Rigistration');
            }
        }
        finally
        {
            setLoading(false);
        }
    };


  return (
    <>
        <div className={`${styles.wrapper} row`}>
            <div className={`${styles.holder} col-md-12`}>
                <div className= {`${styles.left} col-md-6`}>
                    <img src={SignUpBanner} alt="" height={1000}/>
                </div>
                <div className={`${styles.right} col-md-5`}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.logoholder} mt-6`}> <img src={RyderLogo} alt=""/></div>

                        <form action="" method="post" className='elements'>
                            <h2 className={`${styles.SignUp_H4} mt-4`}>Sign Up as a Rider</h2>
                            <div className="form-holder col-md-8">
                                <label className='mt-1'><b>First Name</b></label>
                                <div className={`${styles.input_container}`}>
                                    <input type="text"
                                    placeholder="Enter your first name"
                                    className={`${styles.form_control} form-control px-5 mt-1`}
                                    value={FirstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <img src={mailLogo} alt="" className={`icon ${styles.icon}`} />
                                </div>
                            </div>
                            <div className="form-holder col-md-8">
                                <label className='mt-1'><b>Last Name</b></label>
                                <div className={`${styles.input_container}`}>
                                    <input
                                    type="text"
                                    placeholder="Enter your last name"
                                    className={`${styles.form_control} form-control px-5 mt-1`}
                                    value={LastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <img src={mailLogo} alt="" className={`icon ${styles.icon}`} />
                                </div>
                            </div>
                            <div className="form-holder col-md-8">
                                <label className='mt-1'><b>Phone Number</b></label>
                                <div className={`${styles.input_container}`}>
                                    <input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    className={`${styles.form_control} form-control px-5 mt-1`}
                                    value={PhoneNumber}
                                    onChange={handlePhoneNumberChange}
                                    />
                                    <img src={mailLogo} alt="" className={`icon ${styles.icon}`} />
                                </div>
                            </div>

                            <div className="form-holder col-md-8">
                                <label className='mt-1'><b>Email Address</b></label>
                                <div className={`${styles.input_container}`}>
                                    <input
                                    type="text"
                                    placeholder="Enter your email address"
                                    className={`${styles.form_control} form-control px-5 mt-1`}
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <img src={mailLogo} alt="" className={`icon ${styles.icon}`} />
                                </div>
                            </div>

                              {/* <div className="search mt-3">
                                  <input type="text" />
                              </div>
                                <div className="address">
                                    <p>city: <span>...</span></p>
                                    <p>State: <span>...</span></p>
                                    <p>Zip: <span>...</span></p>
                                    <p>Country: <span>...</span></p>
                                </div> */}
                              {/*<div className="form-holder col-md-8">*/}
                              {/*  <label className='mt-2'><b>City</b></label>*/}
                              {/*  <select name="" id="" className='form-control' required>*/}
                              {/*        <option value="">Select a City</option>*/}
                              {/*        <option value={City} onChange={(e) => setCity(e.target.value)}>Lagos</option>*/}
                              {/*        <option value={City} onChange={(e) => setCity(e.target.value)}>Benue</option>*/}
                              {/*        <option value={City} onChange={(e) => setCity(e.target.value)}>Abuja</option>*/}
                              {/*        <option value={City} onChange={(e) => setCity(e.target.value)}>Portharcort</option>*/}
                              {/*  </select>*/}
                              {/*</div>*/}

                              <div className="form-holder col-md-8">
                                  <label className='mt-1'><b>Password</b></label>
                                  <div className={`${styles.input_container}`}>
                                      <input
                                          type="password"
                                          placeholder="Enter your password"
                                          className={`${styles.form_control} form-control px-5 mt-1`}
                                          value={Password}
                                          onChange={(e) => setPassword(e.target.value)}
                                      />
                                      <img src={PasswordLogo} alt="" className={`icon ${styles.icon}`} />
                                  </div>
                              </div>
                              <div className="form-holder col-md-8">
                                  <label className='mt-1'><b>Confirm Password</b></label>
                                  <div className={`${styles.input_container}`}>
                                      <input
                                          type="password"
                                          placeholder="Confirm your password"
                                          className={`${styles.form_control} form-control px-5 mt-1`}
                                          value={confirmPassword}
                                          onChange={(e) => setConfirmPassword(e.target.value)}
                                      />
                                      <img src={PasswordLogo} alt="" className={`icon ${styles.icon}`} />
                                  </div>
                              </div>
                            <div className="form-holder col-md-8">
                            <label className='mt-2'><b>Bike Documents</b></label>
                            <div className={`input_container form-control ${styles.input_container}`}>
                                <div className={`${styles.takers}`}>
                                <label className={`${styles.selection}`}>
                                    <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={(e) => handleFileChange(e, setBikeDocument, 2 * 1024 * 1024, setError)}
                                    required
                                    />
                                    <img src={Cloud} alt="" className={`iconn ${styles.iconn}`} />
                                    <span>Upload</span>
                                </label>
                                <div className="txt" style={{ width: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {BikeDocument && (
                                    <span> {BikeDocument.name} </span>
                                    )}
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="form-holder col-md-8">
                            <label className='mt-2'><b>Valid ID</b></label>
                            <div className={`input_container form-control ${styles.input_container}`}>
                                <div className={`${styles.takers}`}>
                                <label className={`${styles.selection}`}>
                                    <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={(e) => handleFileChange(e, setValidIdUrl, 2 * 1024 * 1024, setError)}
                                    required
                                    />
                                    <img src={Cloud} alt="" className={`iconn ${styles.iconn}`} />
                                    <span>Upload</span>
                                </label>
                                <div className="txt" style={{ width: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {ValidIdUrl && (
                                    <span> {ValidIdUrl.name} </span>
                                    )}
                                </div>
                                </div>
                            </div>
                            </div>

                            <div className="form-holder col-md-8">
                            <label className='mt-2'><b>Passport</b></label>
                            <div className={`input_container form-control ${styles.input_container}`}>
                                <div className={`${styles.takers}`}>
                                <label className={`${styles.selection}`}>
                                    <input
                                    type="file"
                                    style={{ display: 'none' }}
                                    onChange={(e) => handleFileChange(e, setPassportPhoto, 2 * 1024 * 1024, setError)}
                                    required
                                    />
                                    <img src={Cloud} alt="" className={`iconn ${styles.iconn}`} />
                                    <span>Upload</span>
                                </label>
                                <div className="txt" style={{ width: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {PassportPhoto && (
                                    <span> {PassportPhoto.name} </span>
                                    )}
                                </div>
                                </div>
                            </div>
                            </div>
                            

                            {/* Display error message */}
                              {error && <div className="error-message col-md-7" style={{ textAlign: 'center', color: 'red' }}>{error}</div>}
                              {/* Display success message */}
                              {successMessage && <div className={`${styles.messages1}form-holder col-md-7`} style={{ textAlign: 'center', color: 'green' }}>
                                  <small><b>{successMessage}</b></small>
                              </div>}
                              {/* Display loading spinner */}
                              {loading && <div className={`${styles.messages2}form-holder col-md-7`} style={{ textAlign: 'center', color: 'yellow' }}>
                                  <small>Loading...</small>
                              </div>} 

                            <div className="form-holder col-md-8" >
                                <button
                                    className={`${styles.submitting}`}
                                    type="submit"
                                    onClick={handleRegister}
                                > Sign Up </button>
                            </div>
                            <div className="form-holder mt-2" style={{ textAlign: 'left' }}>
                                <label>
                                    <p> Already have an account? <a href="/login">SignIn</a></p>
                                </label>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RiderSignUp;
