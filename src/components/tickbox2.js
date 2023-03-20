import { toppings2 } from "./toppings2";
import "./tickbox.css";

function Tickbox2({ onChange }) {
  const handleCheckboxChange = (event) => {
    const target = event.target;
    const value = target.value;
    const checked = target.checked;
    onChange(checked ? value : "");
  };

  return (
    <div className="App">
      <ul className="toppings-list">
        {toppings2.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    onChange={handleCheckboxChange}
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

export default Tickbox2;