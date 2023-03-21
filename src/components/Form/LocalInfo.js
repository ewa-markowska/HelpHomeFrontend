import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';

const LocalInfo = ({ formData, setFormData, page, setPage, x, setX, onSubmit }) => {
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [street, setStreet] = useState("");
  const [regularity, setRegularity] = useState([]);
  const [offerType, setOfferType] = useState("");
  const userId = useSelector((state) => state.userId);
  const [description, setDescription] = useState("");
  

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      address: {
        ...prevFormData.address,
        id:10,
        [name]: value,
      },
    }));
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
    setDescription(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: value,
    }));
    setDescription(value);
  };


  const handleUserIdChange = (newUserId) => {
    if (newUserId) {
      setFormData({
        ...formData,
        userId: newUserId,
      });
    } else {
      setFormData({
        ...formData,
        userId: "",
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <motion.div initial={{ x: x }} transition={{ duration: 1 }} animate={{ x: 0 }}>
      <div className="card">
        <div className="step-title">Szczegóły lokalizacji</div>
        <form onSubmit={handleSubmit}>
          

          <div className="form-group">
            <label htmlFor="street">Adres</label>
            <input
              type="text"
              placeholder="Adres"
              id="street"
              name="Street"
              value={formData.address.street}
              onChange={handleAddressChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">Miejscowość</label>
            <input
              type="text"
              placeholder="Miejscowość"
              id="city"
              name="City"
              value={formData.address.city}
              onChange={handleAddressChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="postalCode">Kod pocztowy</label>
            <input
              type="text"
              placeholder="Kod pocztowy"
              id="postalCode"
              name="PostalCode"
              value={formData.address.postalCode}
              onChange={handleAddressChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description"></label>
            <textarea
              placeholder="Opis"
              id="description"
              value={formData.description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="button-area">
          <button type="submit" onClick={() => handleUserIdChange(userId)}>Dodaj</button>
           
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
        </form>
      </div>
    </motion.div>
  );
};

export default LocalInfo;
