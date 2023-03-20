import { useState } from "react";
import { motion } from "framer-motion";
import Tickbox1 from "../tickbox1";
import Tickbox2 from "../tickbox2";


const LocationInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
 
  const [OfferType, setOfferType] = useState("");
  const [Regularity, setRegularity] = useState("");
  const [PriceOffer,setPriceOffer] = useState("");

  const handleRegularityChange = (value) => {
    if (value) {
      setRegularity(value);
      setFormData({
        ...formData,
        Regularity: value, 
      });
    } else {
      setRegularity("");
      setFormData({
        ...formData,
        Regularity: "", 
      });
    }
  };


  const handleOfferTypeChange = (value) => {
    if (value) {
      setOfferType(value);
      setFormData({
        ...formData,
        OfferType: value, 
        Name:value
      });
    } else {
      setOfferType("");
      setFormData({
        ...formData,
        OfferType: "", 
        Name:''
      });
    }
  };

  
  const handlePriceChange = (event) => {
    const { value } = event.target;
    const parsedValue = parseInt(value, 10);
    setPriceOffer(parsedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      OfferType: OfferType,
      Regularity: Regularity,
      PriceOffer: PriceOffer
    });
    setPage(page + 1);
    setX(2000);
  };

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="card">
        <div className="step-title">Szczegóły oferty</div>

        <div className="space">
          Zaznacz właściwe:
          <div>
            <Tickbox1 setFormData ={setFormData} onChange={handleRegularityChange} />
          </div>

          <div className="space">
            Typ usługi:
            <div>
            <Tickbox2 setFormData={setFormData} onChange={handleOfferTypeChange} />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Cena za usługę" value={PriceOffer} onChange={handlePriceChange} />

          <div className="button-area">
            <button type="submit">Następny krok</button>
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

export default LocationInfo;
