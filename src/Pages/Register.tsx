import React, { useState, useEffect, useRef, FormEvent } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import './Page.css';
import './register.css';

// Main Component
const Register: React.FC = () => {
  // State variables
  const [activeDiv, setActiveDiv] = useState<number | null>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // Get the site key from environment variable, with a fallback
  const apiCPT: string = process.env.REACT_APP_CAPTCHA_API || 'default-site-key'

  const openDiv = (divNumber: number) => {
    setActiveDiv(divNumber);
  };

  useEffect(() => {
    openDiv(1); // Open Div 1 when component mounts
  }, []); // Empty dependency array ensures the effect runs only once


  const apiUrl = process.env.REACT_APP_API_URL;

  // Refs for form inputs
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const verifyCodeRef = useRef<HTMLInputElement>(null);

  // Handle form reset
  const handleReset = () => {
    if (loginRef.current) loginRef.current.value = '';
    if (passwordRef.current) passwordRef.current.value = '';
    if (passwordCRef.current) passwordCRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
    if (verifyCodeRef.current) verifyCodeRef.current.value = '';
  };

  // Handle registration form submission
  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    if (
      !loginRef.current?.value ||
      !passwordRef.current?.value ||
      !passwordCRef.current?.value ||
      !emailRef.current?.value ||
      !captchaValue
    ) {
      setMessage('Please fill out all fields and complete the reCAPTCHA.');
      return;
    }

    if (passwordRef.current.value !== passwordCRef.current.value) {
      setMessage('Passwords do not match.');
      return;
    }

    const data = {
      name: loginRef.current.value,
      pwd: passwordRef.current.value,
      pw2: passwordCRef.current.value,
      email: emailRef.current.value,
      refcode: verifyCodeRef.current?.value || null,
      captcha: captchaValue,
    };

    try {
      const response = await axios.post(`${apiUrl}/users`, data);
      if (response.status === 200) {
        setMessage('User registered successfully!');
        handleReset();
      } else {
        setMessage('An error occurred while registering the user. Please try again later.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage('An error occurred while registering the user. Please try again later.');
    }
  };

  return (
    <div className="modal-content">
      {activeDiv === 1 && (
        <div className="modal-div">
          <div className="register-container">
            <h2>REGISTER NOW</h2>
            <form onSubmit={handleRegister}>
              <div className="form-column">
                <label htmlFor="login">Login:</label>
                <input type="text" id="login" name="login" ref={loginRef} required />
              </div>
              <div className="form-column">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" ref={passwordRef} required autoComplete="new-password" />
              </div>
              <div className="form-column">
                <label htmlFor="passwordC">Confirm Password:</label>
                <input type="password" id="passwordC" name="passwordC" ref={passwordCRef} required autoComplete="new-password" />
              </div>
              <div className="form-column">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" ref={emailRef} required />
              </div>
              <div className="form-column">
                <label htmlFor="verify">Referral Code:</label>
                <input type="text" id="verify" name="verify" ref={verifyCodeRef} />
              </div>
          <div className="form-column">
            <ReCAPTCHA
              sitekey={apiCPT}
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>
              <div className="form-row">
                <button type="submit">Register</button>
                <button type="button" onClick={handleReset}>Reset</button>
              </div>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
