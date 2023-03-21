import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setUserEmail, setUserId, setUserLoginStatus } from "../actions";
import axios from "axios";
import Cookies from 'js-cookie';

const SignUp = ({ onLogin, page, setPage, x, setX}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(`Sending login request for email ${email}...`);
   
    try {
      const response = await axios.post(
        "https://localhost:7052/api/account/login",
        {
          Email: email,
          Password: password,
          RememberLogin: true,
        },
        { withCredentials: true }
      );
      console.log(`Received login response:`, response);
      console.log(`Response headers:`, response.headers);
  
      if (response.status === 200 && response.data.email && response.data.id) {
        dispatch(setUserEmail(response.data.email));
        console.log(`Email użytkownika to : ${response.data.email}`);
        dispatch(setUserId(response.data.id));
        Cookies.set("userId", response.data.id, { expires: 7, path: "/" });
  
        const authToken = response.headers["authorization"];
        Cookies.set("authToken", authToken, { expires: 7, path: "/" });
        
        console.log(`The auth token is: ${authToken}`);
        axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;


        alert(`Logged in successfully as ${response.data.email}`);
        dispatch(setUserLoginStatus(true));
        setPage(page + 1); // move user to next step
      } else {
        console.log(
          `Login failed. Response status: ${response.status}, email: ${response.data.email}, id: ${response.data.id}`
        );
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error(`Error occurred while logging in: ${error}`);
      alert("Login failed. Please try again.");
    }
  };
  
  
  
  
  

  return (
    <motion.div
      initial={{ x: 2000 }}
      transition={{ duration: 1 }}
      animate={{ x: x }}
    >
      <div className="card">
        <div className="step-title">Dodaj ofertę!</div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="form-group"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-group"
            placeholder="Hasło"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <div className='button-area'>
              <button type="submit">
                  Zaloguj
              </button>
              <br/>
              <button onClick={() => {setPage(page + 1); setX(2000);}}>
                  Następny krok
              </button>
           </div>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;
