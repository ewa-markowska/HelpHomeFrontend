import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
import { setUserEmail, setUserId, setUserLoginStatus, logoutUser } from '../../actions';
import { useDispatch } from 'react-redux';
import './login.scss'



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    
    console.log(`Dodano do reduxa status logowania`);
    console.log(`Sending login request for email ${email}...`);
    axios
      .post(
        "https://localhost:7052/api/account/login",
        {
          Email: email,
          Password: password,
          RememberLogin: true,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(`Received login response with status ${response.status}.`);
        console.log(`Response data: ${JSON.stringify(response.data)}`);

        if (
          response.status === 200 &&
          response.data.email &&
          response.data.id
        ) {
          dispatch(setUserEmail(response.data.email));
          console.log(`Email użytkownika to : ${response.data.email}`);
          dispatch(setUserId(response.data.id));
          Cookies.set("userId", response.data.id, { expires: 7, path: "/" });
          alert(`Logged in successfully as ${response.data.email}`);
          dispatch(setUserLoginStatus(true));
        } else {
          console.log(
            `Login failed. Response status: ${response.status}, email: ${response.data.email}, id: ${response.data.id}`
          );
          alert("Login failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error(`Error occurred while logging in: ${error}`);
        alert("Login failed. Please try again.");
      });
  };

  
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Potrzebujesz pomocy?</h1>
          <p>
            Dzięki HH Twoje życie może stać się prostsze i przyjemniejsze! Zatrudniając pomoc domową dajesz sobie więcej czasu i przestrzeni na swoje pasje i zainteresowania, a komuś, kto potzrebuje pomocy możliwość zatrudnienia. Ty wybierasz!
          </p>
          <span>Nie masz jeszcze konta?</span>
          <Link to="/rejestracja">
            <button>Zarejestruj się!</button>
          </Link>
        </div>

        <div className="right">
          <h1>Logowanie</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Hasło"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Zaloguj</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

