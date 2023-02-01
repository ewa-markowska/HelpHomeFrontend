import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
  const[click,setClick] = useState(false);
  const[button,setButton] =useState(true)


  const handleClick = () => setClick(!click);
  const closeMobileMenu=() => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(()=>{
    showButton();
  },[]);


  window.addEventListener('resize',showButton);

  return (
    <>
     <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
           

        </Link>
        <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times':'fas fa-bars' }></i>
        
       
        </div>
        <ul className = {click ? 'nav-menu active': 'nav-menu'}>
          <li className ='nav-item'>
            <Link to='/' className='nav-links'onClick={closeMobileMenu}>
            HOME
            </Link>
          </li>
          <li className ='nav-item'>
            <Link to='/rejestracja' className='nav-links'onClick={closeMobileMenu}>
            REJESTRACJA
            </Link>
          </li>
          
          <li className ='nav-item'>
            <Link to='/dodajoferte' className='nav-links'onClick={closeMobileMenu}>
            DODAJ OFERTĘ
            </Link>
          </li>

          <li>
              <Link
                to='/logowanie'
                className='nav-links-mobile btn--large'
               
                onClick={closeMobileMenu}
              >
                Logowanie
              </Link>
            </li>

        </ul>

        {button && <Button buttonStyle = 'btn--outline' buttonLink={'logowanie'}>Logowanie</Button>}
      </div>

     </nav>
    </>
  )
}

export default Navbar
