import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import { FaBars, FaUser } from "react-icons/fa";
import { useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { setUserEmail, setUserId, logoutUser } from './actions';

function Navbar({ onLogout }) {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cookies, removeCookie] = useCookies(["userEmail", "userId"]);

  const handleMobileMenuClick = () => setClick(!click);
  const handleUserIconClick = () => setDropdownOpen(!dropdownOpen);

  const closeMobileMenu = () => {
    setClick(false);
    setDropdownOpen(false);
  };
  
  const userEmail = useSelector(state => state.auth?.userEmail);
  const dispatch = useDispatch();

  const logout = () => {
    removeCookie("userEmail");
    removeCookie("userId");
    if (typeof logoutUser === "function") {
      dispatch(logoutUser());
    }
    onLogout();
  };

  const userId = cookies.userId;

  const dropdownItems = userEmail !== undefined && userEmail !== null
    ? [
        {
          title: "Mój profil",
          link: `/userProfile/${userId}`,
        },
        {
          title: "Historia",
          link: "/my-transactions",
        },
        {
          title: "Oferty",
          link: "/my-offers",
        },
        {
          title: "Wiadomości",
          link: "/my-conversations",
        },
        {
          title: "Wyloguj",
          onClick: logout,
          link: "/",
        },
      ]
    : [
        {
          title: "Mój profil",
          link: `/userProfile/${userId}`,
          hidden: true,
        },
        {
          title: "Transakcje",
          link: "/my-transactions",
          hidden: true,
        },
        {
          title: "Oferty",
          link: "/my-offers",
          hidden: true,
        },
        {
          title: "Wiadomości",
          link: "/my-conversations",
          hidden: true,
        },
        {
          title: "Wyloguj",
          onClick: logout,
          link: "/",
          hidden: true,
        },
      ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}></Link>
          <div className="menu-icon" onClick={handleMobileMenuClick}>
            <FaBars />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rejestracja" className="nav-links" onClick={closeMobileMenu}>
                REJESTRACJA
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dodajoferte" className="nav-links" onClick={closeMobileMenu}>
                DODAJ OFERTĘ
              </Link>
            </li>
            <li>
              <Link to="/logowanie" className="nav-links-mobile btn--large" onClick={closeMobileMenu}>
                Logowanie
              </Link>
            </li>
          </ul>

          {userEmail !== undefined && userEmail !== null && (
            <div className="navbar-logged-in">
              Logged in as: {userEmail}
            </div>
          )}

          {click && <div className="navbar-overlay" onClick={closeMobileMenu}></div>}

          <div className="navbar-button">
            <Button buttonStyle="btn--outline" buttonLink="logowanie" onClick={closeMobileMenu}>
              Logowanie
            </Button>
          </div>
          <div className="navbar-user" onClick={handleUserIconClick}>
            <FaUser color="white" size={20} />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <ul>
                  {dropdownItems.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link} onClick={closeMobileMenu}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
