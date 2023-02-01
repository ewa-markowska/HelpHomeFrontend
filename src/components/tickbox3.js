import { useState } from "react";
import { toppings3 } from "./toppings3";
import './tickbox.css'


function Tickbox3() {
    const [] = useState(0);
  
    return (
      <div className="App">
        <h3></h3>
        <ul className="toppings-list">
          {toppings3.map(({ name }, index) => {
            return (
              <li key={index}>
                <div className="toppings-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                  
                </div>
              </li>
            );
          })}
         
        </ul>
      </div>
    );
  }

  export default Tickbox3