import React from 'react';
import '../App.css';
import {Button} from './Button';
import './MainView.css';
import '../components/Stefan.png'






function MainView() {
  return (
    <div className='mainView-container'>
        <img className ="stefan" alt="Człowiek trzymający kosz z praniem" src='./Stefan.png'/>
        <div className='welcome-message'>
        <h1>
       
       Potrzebujesz pomocy{"\n"}
       w codziennych pracach ?{"\n"}
       A może szukasz dodatkowej pracy{"\n"}
       jako osoba sprzątajaca?
      
      </h1>
      
      <Button buttonLink={'dodajoferte'} class= 'btn-primary '  buttonstyle='btn-outline'
            buttonSize='btn--large'>dodaj ofertę <i class="fa-solid fa-plus"></i></Button>
            
        </div>
        
        <div>
            
            
           
        </div>
      
    </div>
  )
}

export default MainView
