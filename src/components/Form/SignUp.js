import React from "react";
import { motion } from "framer-motion";

const SignUp = ({ formData, setFormData, page, setPage, x, setX, isLoggedIn }) => {
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="card">
        <div className="step-title">Dodaj ofertę!</div>
        
        <input type="text" className="form-group" placeholder="Email" />
        <input type="text" className="form-group" placeholder="Hasło" />
       
          <button onClick={() => {setPage(page + 1); setX(2000);}}>
            Nastepny krok
          </button>
        
      </div>
    </motion.div>
  );
};

export default SignUp;
