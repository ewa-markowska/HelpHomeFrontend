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
  const [phoneNumberValid , setPhoneNumberValid] = useState(true);


  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


    const validatePhoneNumber = phoneNumber => {
      const phoneNumberRegex = /^\d{9}$/;
      return phoneNumberRegex.test(phoneNumber);
    };

    const handlePhoneNumberChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setPhoneNumberValid(validatePhoneNumber(e.target.value));
    };

    const handleSubmit = async e => {
      e.preventDefault();
      setLoading(true);
      setError('');
      const { name, email, password, confirmPassword, phoneNumber, roleId } = formData;
    
    

      if (!name || !email || !password || !confirmPassword || !phoneNumber || !roleId) {
        setLoading(false);
        setError('All fields are required!');
        return;
      }
    
      if (password !== confirmPassword) {
        setLoading(false);
        setError('Passwords do not match!');
        return;
      }

     
      
      
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
            <h1>Wi??cej czasu dla Ciebie!</h1>
            <p>Dzi??ki HH Twoje ??ycie mo??e sta?? si?? prostsze i przyjemniejsze!
               Zatrudniaj??c pomoc domow?? dajesz sobie wi??cej czasu i przestrzeni na swoje pasje
               i zainteresowania, a komu??, kto potzrebuje pomocy mo??liwo???? zatrudnienia. Ty wybierasz!

            </p>
            <span>Czy masz ju?? konto?</span>
            <Link to="/logowanie"><button >Zaloguj si??!</button></Link>
            </div>
            
            <div className="right">
                <h1>Rejestracja</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      placeholder="U??ytkownik"
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
                  placeholder="Has??o"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}/>

                    <input
                  type="password"
                  placeholder="Powt??rz has??o"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  />

                  <input
                    type="tel"
                    placeholder="Numer telefonu"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className={phoneNumberValid ? '' : 'invalid'}
                    
                        />
                          {!phoneNumberValid && (
                          <div className="error">Wprowad?? poprawny numer</div>
                          )}

                  <div>
                   <select name="roleId" value={formData.roleId} onChange={handleChange}>
                   

                   <option value={1}>Szukam pracy</option>
                    <option value={2}>Oferuje prac??</option>
                    </select>
                  </div>
                    <button type="submit">Zarejestruj si??</button>

                    

                </form>
            </div>
        </div>
    </div>
    
    )}
    </> 
  );
};



export default Register
