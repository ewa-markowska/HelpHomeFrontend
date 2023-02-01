import { toppings1 } from "./toppings1";
import { useState } from "react";
import './tickbox.css'

function Tickbox1() {
    const [] = useState(0);
  
    return (
      <div className="App">
        <h3></h3>
        <ul className="toppings-list">
          {toppings1.map(({ name }, index) => {
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

  export default Tickbox1