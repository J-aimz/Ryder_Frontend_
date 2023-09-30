import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignUpBanner from '../../images/RyderImg.svg';
import RyderLogo from '../../images/Ryder-Logo.svg';
import styles from '../../styles/signUp.module.css';
import 'react-toastify/dist/ReactToastify.css';
import mailLogo from '../../../src/images/icons/Email.png';
import Cloud from '../../../src/images/icons/Cloud.png';
import PasswordLogo from '../../../src/images/icons/Password.png';


function RiderSignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [bikeDocument, setBikeDocument] = useState(null);
    const [validID, setValidID] = useState('');
    const [passport, setPassport] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const isPasswordValid = passwordRegex.test(password);
    const isEmailValid = emailRegex.test(email);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

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
        // Remove non-digit characters
        const numericValue = inputValue.replace(/\D/g, '');
        // Limit the phone number to 11 digits
        const limitedValue = numericValue.substring(0, 11);
        setPhoneNumber(limitedValue);
    
        // Validation: Check if the phone number is exactly 11 digits
        if (limitedValue.length !== 11) {
            setError('Phone number must be exactly 11 digits.');
        } else {
            setError(''); // Reset the error message if valid
        }
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
            if (password !== confirmPassword) {
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
                firstName,
                lastName,
                email,
                phoneNumber,
                password,
                validID,
                passport,
                bikeDocument,
                city,
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
                localStorage.setItem('email', email);
                navigate("/login");
            }
            // Clear input fields after successful registration
            setFirstName('');
            setLastName('');
            setPhoneNumber('');
            setEmail('');
            setCity('');
            setBikeDocument('');
            setValidID('');
            setPassport('');
            setPassword('');
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
                                    <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    className={`${styles.form_control} form-control px-5 mt-1`}
                                    value={firstName}
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
                                    value={lastName}
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
                                    value={phoneNumber}
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <img src={mailLogo} alt="" className={`icon ${styles.icon}`} />
                                </div>
                            </div>
                            
                            <div className="form-holder col-md-8">
                                <label className='mt-2'><b>City</b></label>
                                <select name="" id="" className='form-control' required>
                                    <option value="">Select a City</option>
                                    <option value={city} onChange={(e) => setCity(e.target.value)}>Lagos</option>
                                    <option value={city} onChange={(e) => setCity(e.target.value)}>Benue</option>
                                    <option value={city} onChange={(e) => setCity(e.target.value)}>Abuja</option>
                                    <option value={city} onChange={(e) => setCity(e.target.value)}>Portharcort</option>
                                </select>
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
                                    {bikeDocument && (
                                    <span> {bikeDocument.name} </span>
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
                                    onChange={(e) => handleFileChange(e, setValidID, 2 * 1024 * 1024, setError)}
                                    required
                                    />
                                    <img src={Cloud} alt="" className={`iconn ${styles.iconn}`} />
                                    <span>Upload</span>
                                </label>
                                <div className="txt" style={{ width: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {validID && (
                                    <span> {validID.name} </span>
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
                                    onChange={(e) => handleFileChange(e, setPassport, 2 * 1024 * 1024, setError)}
                                    required
                                    />
                                    <img src={Cloud} alt="" className={`iconn ${styles.iconn}`} />
                                    <span>Upload</span>
                                </label>
                                <div className="txt" style={{ width: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {passport && (
                                    <span> {passport.name} </span>
                                    )}
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="form-holder col-md-8">
                                <label className='mt-1'><b>Password</b></label>
                                <div className={`${styles.input_container}`}>
                                    <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className={`${styles.form_control} form-control px-5 mt-1`}
                                    value={password}
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
