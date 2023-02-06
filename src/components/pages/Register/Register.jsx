import "./register.scss";
import { Link} from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';



const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    roleId: 2
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
    <div className="register">
        <div className="card">
            <div className="left">
            <h1>Więcej czasu dla Ciebie!</h1>
            <p>Dzięki HH Twoje życie może stać się prostsze i przyjemniejsze!
               Zatrudniając pomoc domową dajesz sobie więcej czasu i przestrzeni na swoje pasje
               i zainteresowania, a komuś, kto potzrebuje pomocy możliwość zatrudnienia. Ty wybierasz!

            </p>
            <span>Czy masz już konto?</span>
            <Link to="/logowanie"><button >Zaloguj się!</button></Link>
            </div>
            
            <div className="right">
                <h1>Rejestracja</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      placeholder="Użytkownik"
                      name="name"
                      value={formData.name}
                      onChange={handleChange} />

                    <input
                     type="email" 
                     placeholder="Email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}/>

                    <input 
                    
                  type="password" 
                  placeholder="Hasło"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}/>

                    <input
                  type="password"
                  placeholder="Powtórz hasło"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  />

                  <input
                  type="tel"
                  placeholder="Numer telefonu"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                        />

                  <div>
                   <select name="roleId" value={formData.roleId} onChange={handleChange}>
                   

                   <option value={1}>Szukam pracy</option>
                    <option value={2}>Oferuje pracę</option>
                    </select>
                  </div>
                    <button type="submit">Register</button>

                    

                </form>
            </div>
        </div>
    </div>
    
    )}
    </> 
  );
};



export default Register
