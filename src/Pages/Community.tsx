import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
}

const PasswordRecovery: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.1.80:8080/api/users/password-recovery', formData);
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

  return (
    <div>
      <h1>Password Recovery</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <button type="submit">Recover Password</button>
      </form>
    </div>
  );
}

export default PasswordRecovery;
