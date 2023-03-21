import { useState } from "react";
import { motion } from "framer-motion";
import Tickbox1 from "../tickbox1";
import Tickbox2 from "../tickbox2";
import { toppings1 } from "../toppings1";

const LocationInfo = ({ formData, setFormData, page, setPage, x, setX }) => {
  const [offertype, setOffertype] = useState("");
  const [regularity, setRegularity] = useState(null);
  const [priceOffer, setPriceOffer] = useState("");

  const handleRegularityChange = (value) => {
    if (value) {
      const index = toppings1.findIndex((topping) => topping.name === value);
      setFormData({
        ...formData,
        regularity: parseInt(index, 10) + 1,
      });
      setRegularity(parseInt(index, 10) + 1);
    } else {
      setFormData({
        ...formData,
        regularity: null,
      });
      setRegularity(null);
    }
  };
  

  const handleOfferTypeChange = (value) => {
    if (value) {
      setOffertype(value);
      setFormData({
        ...formData,
        offertype: value,
        name: value,
      });
    } else {
      setOffertype("");
      setFormData({
        ...formData,
        offertype: "",
        name: "",
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
      offertype: offertype,
      regularity: regularity,
      priceOffer: priceOffer,
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
            <Tickbox1 setFormData={setFormData} onChange={handleRegularityChange} />
          </div>

          <div className="space">
            Typ usługi:
            <div>
              <Tickbox2 setFormData={setFormData} onChange={handleOfferTypeChange} />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Cena za usługę" value={priceOffer} onChange={handlePriceChange} />

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
