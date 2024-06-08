import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const apiUrl = process.env.REACT_APP_API_URL;

// Interfaces
interface FormData {
  name: string;
  email: string;
}

interface PasswordData {
  login: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

// Main Component
const Game: React.FC = () => {
  // State variables
  const [activeDiv, setActiveDiv] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [passwordData, setPasswordData] = useState<PasswordData>({
    login: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  // Refs for form inputs
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const verifyCodeRef = useRef<HTMLInputElement>(null);

  // Handle button clicks to show different forms
  const handleButtonClick = (divNumber: number) => {
    console.log("Button clicked:", divNumber);
    setActiveDiv(divNumber);
  };

  // Handle form reset
  const handleReset = () => {
    if (loginRef.current) loginRef.current.value = '';
    if (passwordRef.current) passwordRef.current.value = '';
    if (passwordCRef.current) passwordCRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';
    if (verifyCodeRef.current) verifyCodeRef.current.value = '';
    setPasswordData({
      login: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });
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

  // Handle change events for registration form inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle change events for password form inputs
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  // Handle password recovery form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please complete the ReCAPTCHA.');
      return;
    }
    try {
      const response = await axios.post(`${apiUrl}/users/password-recovery`, formData);
      if (response.status === 200) {
        alert('Password recovery email sent successfully!');
      } else {
        alert('An error occurred while sending the password recovery email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending password recovery email:', error);
      alert('An error occurred while sending the password recovery email. Please try again later.');
    }
  };

  console.log('API URL:', apiUrl);  // Check if the API URL is being set correctly

  // Handle change password form submission
  const handleChangePassword = async (e: FormEvent) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please complete the ReCAPTCHA.');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      setMessage('New passwords do not match.');
      return;
    }

    const data = {
      login: passwordData.login,
      currentPassword: passwordData.currentPassword,
      newPassword: passwordData.newPassword,
    };

    try {
      const response = await axios.post(`${apiUrl}/users/change-password`, data);
      if (response.status === 200) {
        setMessage('Password changed successfully!');
        handleReset();
      } else {
        setMessage('An error occurred while changing the password. Please try again later.');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setMessage('An error occurred while changing the password. Please try again later.');
    }
  };

  // Set initial active div when component mounts
  useEffect(() => {
    setActiveDiv(1);
  }, []);

  return (
    <div className="modal-content">
      <div className="navbargame-container">
        <button onClick={() => handleButtonClick(1)}>REGISTER {activeDiv === 1 && '⬇'}</button>
        <button onClick={() => handleButtonClick(2)}>RECOVERY PASSWORD {activeDiv === 2 && '⬇'}</button>
        <button onClick={() => handleButtonClick(3)}>CHANGE PASSWORD {activeDiv === 3 && '⬇'}</button>
      </div>

      {activeDiv === 1 && (
        <div className="modal-div">
          <div className="register-container">
            <h2>Register Account</h2>
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
              <ReCAPTCHA
                sitekey="6LfCpeYpAAAAAKaTGD92IR4G5OUNYs6-QxzbQzuN" // Replace with your site key
                onChange={(value) => setCaptchaValue(value)}
              />
              <div className="form-row">
                <button type="submit">Register</button>
                <button type="button" onClick={handleReset}>Reset</button>
              </div>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      )}

      {activeDiv === 2 && (
        <div className="modal-div">
          <div className="register-container">
            <h2>Password Recovery</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-column">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-column">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <ReCAPTCHA
                sitekey="6LfCpeYpAAAAAKaTGD92IR4G5OUNYs6-QxzbQzuN" // Replace with your site key
                onChange={(value) => setCaptchaValue(value)}
              />
              <button type="submit">Recover Password</button>
            </form>
          </div>
        </div>
      )}

      {activeDiv === 3 && (
        <div className="modal-div">
          <div className="register-container">
            <h2>Change Password</h2>
            <form onSubmit={handleChangePassword}>
              <div className="form-column">
                <label htmlFor="login">Login:</label>
                <input type="text" id="login" name="login" value={passwordData.login} onChange={handlePasswordChange} required />
              </div>
              <div className="form-column">
                <label htmlFor="currentPassword">Current Password:</label>
                <input type="password" id="currentPassword" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange} required />
              </div>
              <div className="form-column">
                <label htmlFor="newPassword">New Password:</label>
                <input type="password" id="newPassword" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} required />
              </div>
              <div className="form-column">
                <label htmlFor="confirmNewPassword">Confirm New Password:</label>
                <input type="password" id="confirmNewPassword" name="confirmNewPassword" value={passwordData.confirmNewPassword} onChange={handlePasswordChange} required />
              </div>
              <ReCAPTCHA
                sitekey="6LfCpeYpAAAAAKaTGD92IR4G5OUNYs6-QxzbQzuN" // Replace with your site key
                onChange={(value) => setCaptchaValue(value)}
              />
              <button type="submit">Change Password</button>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
