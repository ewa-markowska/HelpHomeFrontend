import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import { FaBars, FaUser } from "react-icons/fa";

function Navbar({ userId, UserEmail }) {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMobileMenuClick = () => setClick(!click);
  const handleUserIconClick = () => setDropdownOpen(!dropdownOpen);

  const closeMobileMenu = () => {
    setClick(false);
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");
    window.location.reload();
  };

  const dropdownItems = [
    {
      title: "Profile",
      link: `/profile/${userId}`
    },
    {
      title: "Transactions",
      link: "/my-transactions",
    },
    {
      title: "Offers",
      link: "/my-offers",
    },
    {
      title: "Conversations",
      link: "/my-conversations",
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
