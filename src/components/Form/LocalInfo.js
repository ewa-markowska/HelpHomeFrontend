import { motion } from "framer-motion";

const LocalInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  return (
    <motion.div                            //updated the div tag
    initial={{ x: x }}
    transition={{ duration: 1 }}
    animate={{ x: 0 }}
  >
    <div className="card">
      <div className="step-title">Szczegóły lokalizacji</div>

      <input
        type="text"
        placeholder="Telefon"
      />

      <input
        type="text"
        placeholder="Adres"
      />
      <input
        type="text"
        placeholder="Miejscowość"
      />
      <input
        type="text"
        placeholder="Kod pocztowy"
      />
<div className="button-area">
<button
        onClick={() => {
          alert("You've successfully submitted this form");
        }}>
      Dodaj
      </button>
      <br />
      <button
  onClick={() => {
    setPage(page - 1);
    setX(-2000); 
  }}
>
  Poprzedni krok
</button>
</div>

    </div>
     </motion.div>
  );
};
  
export default LocalInfo;