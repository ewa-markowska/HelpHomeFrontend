import React from "react";

function Logout({ onLogout }) {
  return (
    <div className="logout">
       <button onClick={() => onLogout()}>Logout</button>
    </div>
  );
}

export default Logout;
