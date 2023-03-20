import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";



const LocalInfo = ({ formData, setFormData, page, setPage, x, setX, onSubmit }) => {
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [City, setCity] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [Street, setStreet] = useState("");
  const [Regularity, setRegularity] = useState([]);
  const [OfferType, setOfferType] = useState("");
  const UserId = useSelector((state) => state.userId);
  const [Description, setDescription] = useState("");
  const [Id,setAddressId] = useState(0);


  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      PhoneNumber,
      Address: {
        Id:8,
        Street ,
        City,
        PostalCode,
      },
      Regularity,
      OfferType,
      Description,
      CreatedDate: new Date().toISOString(),
    });

    try {
      const response = await fetch(`api/offers/user/${UserId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Offer added successfully!");
      } else {
        alert("An error occurred while adding the offer");
        console.log(formData)
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while adding the offer");
    }

    onSubmit();
  };

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
    >
      <div className="card">
        <div className="step-title">Szczegóły lokalizacji</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phoneNumber"></label>
            <input
              type="text"
              placeholder="Telefon"
              id="phoneNumber"
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="street"></label>
            <input
              type="text"
              placeholder="Adres"
              id="street"
              value={formData?.Address?.Street}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  Address: {
                    ...formData.Address,
                    Street: e.target.value,
                  },
                })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="city"></label>
            <input
              type="text"
              placeholder="Miejscowosć"
              id="city"
              value={City}
              onChange={(e) => 
                 setFormData({
                ...formData,
                Address: {
                  ...formData.Address,
                  City: e.target.value,
                },
              })
            }
            />
          </div>

          <div className="form-group">
            <label htmlFor="postalCode"></label>
            <input
              type="text"
              placeholder="Kod pocztowy"
              id="postalCode"
              value={PostalCode}
              onChange={(e) =>   
                 setFormData({
                ...formData,
                Address: {
                  ...formData.Address,
                  PostalCode: e.target.value,
                  Id: formData.Address.Id
                },
              })
            }
            />
          </div>
          <div className="form-group">
  <label htmlFor="description"></label>
  <textarea
    placeholder="Opis"
    id="description"
    value={Description}
    onChange={(e) => setDescription(e.target.value)}
  />
</div>
          <div className="button-area">
            <button type="submit">Dodaj</button>
           
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
