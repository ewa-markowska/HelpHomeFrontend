import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("https://localhost:7052/api/account/login", { email, password })
      .then((response) => {
        console.log("Login ok");
      })
      .catch((error) => {
        console.log(error); 
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
