import { motion } from "framer-motion";
import { useSelector } from "react-redux";


const LocalInfo = ({ formData, setFormData, page, setPage, x, setX, onSubmit }) => {
  // const [phoneNumber, setPhoneNumber] = useState("");

  const userId = useSelector((state) => state.userId);
 
  

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      address: {
        ...prevFormData.address,
        [name]: value,
      },
    }));
  };

  const handleDescriptionChange = (e) => {
    const { value } = e.target;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      description: value,
    }));
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
              name="street"
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
              name="city"
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
              name="postalCode"
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
          <button type="submit" onClick={() => {
              handleUserIdChange(userId);
              onSubmit();
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
        </form>
      </div>
    </motion.div>
  );
};

export default LocalInfo;
