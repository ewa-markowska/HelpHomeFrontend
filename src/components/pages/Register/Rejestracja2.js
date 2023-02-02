import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    roleId: 0
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { name, email, password, confirmPassword, phoneNumber, roleId } = formData;

    // Validate form data

    try {
      const response = await axios.post('https://localhost:7052/api/account/register', {
        name,
        email,
        password,
        confirmPassword,
        phoneNumber,
        roleId
      });
      setLoading(false);
      setSuccess(true);
      // Do something with the success response
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {success && <div>Registration Successful!</div>}
      {error && <div>{error}</div>}
      {!loading && !success && (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <select name="roleId" value={formData.roleId} onChange={handleChange}>
              <option value={2}>Oferuje pracę</option>
              <option value={1}>Szukam pracy</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
      )}
    </> 
  );
};
export default Register;
