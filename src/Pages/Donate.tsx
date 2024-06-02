import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  pwd: string;
  pw2: string;
  refcode: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    pwd: '',
    pw2: '',
    refcode: ''
  });

  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.1.80:8080/api/users', formData);
      if (response.status === 200) {
        setMessage('User registered successfully!');
        setFormData({
          name: '',
          email: '',
          pwd: '',
          pw2: '',
          refcode: ''
        });
      } else {
        setMessage('An error occurred while registering the user. Please try again later.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage('An error occurred while registering the user. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="pwd"
          value={formData.pwd}
          onChange={handleChange}
          placeholder="Password"
          required
          autoComplete="new-password"
        />
        <input
          type="password"
          name="pw2"
          value={formData.pw2}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
          autoComplete="new-password"
        />
        <input
          type="text"
          name="refcode"
          value={formData.refcode}
          onChange={handleChange}
          placeholder="Referral Code"
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
