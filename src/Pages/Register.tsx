import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

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

const Game: React.FC = () => {
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

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const verifyCodeRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = (divNumber: number) => {
    console.log("Button clicked:", divNumber);
    setActiveDiv(divNumber);
  };

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

  const handleRegister = async (e: React.FormEvent) => {
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
      refcode: verifyCodeRef.current?.value || null, // Set to null if empty
      captcha: captchaValue,
    };

    try {
      const response = await axios.post('http://103.241.67.70:8080/api/users', data);
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Please complete the ReCAPTCHA.');
      return;
    }
    try {
      const response = await axios.post('http://103.241.67.70.com:8080/api/users/password-recovery', formData);
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
      const response = await axios.post('http://103.241.67.70:8080/api/users/change-password', data);
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

  useEffect(() => {
    setActiveDiv(1); // Open Div 1 when component mounts
  }, []); // Empty dependency array ensures the effect runs only once

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
                <label htmlFor="verify">Verify Code:</label>
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
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
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
              <div>
                <label htmlFor="login">Login:</label>
                <input type="text" id="login" name="login" value={passwordData.login} onChange={handlePasswordChange} required />
              </div>
              <div>
                <label htmlFor="currentPassword">Current Password:</label>
                <input type="password" id="currentPassword" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange} required />
              </div>
              <div>
                <label htmlFor="newPassword">New Password:</label>
                <input type="password" id="newPassword" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} required />
              </div>
              <div>
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
