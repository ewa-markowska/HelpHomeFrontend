import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import "./login.scss";

function Login({ setUserEmail }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      setUserId(id);
    }
  }, []);
  axios.defaults.timeout = 5000
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Sending login request for email ${email}...`);
    axios.post("https://localhost:7052/api/account/login", {
      Email: email,
      Password: password,
      RememberLogin: true
    }, { withCredentials: true,
     })
    .then((response) => {
      console.log(`Received login response with status ${response.status}.`);
      console.log(`Response data: ${JSON.stringify(response)}`);
      const responseData = response.data;
      const userEmail = responseData.email;
      const userId = responseData.id;
      if (response.status === 200 && response.data.email && response.data.id) {
        console.log(`Setting user email to ${response.data.email}...`);
        setUserEmail(response.data.email);
        console.log(`Setting user ID to ${response.data.id}...`);
        setUserId(response.data.id);
        console.log(`Saving user email to local storage...`);
        localStorage.setItem("userEmail", response.data.email);
        console.log(`Saving user ID to local storage...`);
        localStorage.setItem("userId", response.data.id);
    } else {
        console.log(`Login failed. Response status: ${response.status}, email: ${response.data.email}, id: ${response.data.id}`);
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
