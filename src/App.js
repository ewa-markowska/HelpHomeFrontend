import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Profile from "./components/pages/Profile/Profile";
import Form from "./components/Form/Form";
import Filter from "./components/Filter";
import Logout from "./components/Logout";
import UserProfile from "./components/pages/UserProfile/UserProfile"; 
import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get('cookie');

function App() {
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [loggedIn, setLoggedIn] = useState(!!userEmail);

  const handleLogout = () => {
    setLoggedIn(false);
    setUserEmail("");
    setUserId("");
  };

  useEffect(() => {
    setLoggedIn(!!userEmail);
  }, [userEmail]);

  return (
    <Provider store={Store}>
      <>
        <Router>
     
        <Navbar userEmail={userEmail} userId={userId} onLogout={handleLogout}>
            {loggedIn && <Logout logout={handleLogout} />}
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rejestracja" element={<Register />} />
            <Route
              path="/logowanie"
              element={<Login setUserEmail={setUserEmail} setUserId={setUserId} />}
            />
            <Route path="/dodajoferte" element={<Form />} />
            <Route path="/Profile/:Id" element={<Profile userId={userId} />} />
            <Route path="/UserProfile/:userId" element={<UserProfile userId={userId} />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Filter" element={<Filter />} />
            {/* <Route path="/userProfile/:Id" element={<UserProfile userId={userId} />} /> */}
          </Routes>
        </Router>
      </>
    </Provider>
  );
}

export default App;
