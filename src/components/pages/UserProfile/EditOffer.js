import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { updateOffer } from './updateOffer';
import './userProfile.scss';



const EditOffer = ({ offerId = '', onClose, onEditOffer,name, description, price, address = {}, regularity ,updateDate}) => {
    console.log("EditOffer component rendered");
    console.log(`Id updatowanej oferty: ${offerId}`);
  
    const [currentDescription, setCurrentDescription] = useState(description);
    const [currentPrice, setCurrentPrice] = useState(price);
    const [currentAddress, setCurrentAddress] = useState({
        city: address.city ?? '',
        street: address.street ?? '',
        postalCode: address.postalCode ?? ''
    });
    const [currentRegularity, setCurrentRegularity] = useState(regularity);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log(`Editing offer id ${offerId}`)
        if (!offerId) {
            return;
        }
        fetch(`https://localhost:7052/api/offers/${offerId}`)
            .then(response => response.json())
            .then(data => {
                setCurrentDescription(data.description);
                setCurrentPrice(data.priceOffer);
                setCurrentAddress({

                    city: data.address.city,
                    street: data.address.street,
                    postalCode: data.address.postalCode
                });
                setCurrentRegularity(data.regularity);
            })
            .catch(error => {
                console.error(error);
                setError('Something went wrong while fetching the offer data');
            });
    }, [offerId]);

    const handleUpdateOffer = (e) => {
        e.preventDefault();
      
        console.log(`updating offer with id ${offerId}`);
        console.log(`${currentAddress.city}`)
        console.log(`${currentAddress.street}`)
        console.log(`${currentAddress.postalCode}`)
      
        const updatedAddress = {
          city: currentAddress.city,
          street: currentAddress.street,
          postalCode: currentAddress.postalCode
        }
    
        const dto = {
          name: name,
          description: currentDescription,
          priceOffer: currentPrice,
          address: updatedAddress,
          regularity: parseInt(currentRegularity),
          updateDate: new Date().toISOString()
        }
      
        updateOffer(offerId, dto)
        console.log(`po update offer ${offerId},    ${dto}`)
        
      }
    

  return (
    <div className="edit-profile">
      <h2>Edytuj ofertę</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleUpdateOffer}>

        <div className="form-group">
          <label htmlFor="description">Opis:</label>
          <textarea id="description" value={currentDescription} onChange={e => setCurrentDescription(e.target.value || '')} required></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Cena:</label>
          <input type="number" id="price" value={currentPrice} onChange={e => setCurrentPrice(e.target.value || '')} />
        </div>

        <div className="form-group">
            <label htmlFor="address">Adres:</label>
            <div className="form-subgroup">
            <input type="text" id="street" value={currentAddress.street} onChange={e => setCurrentAddress({ ...currentAddress, street: e.target.value || '' })} />
            <input type="text" id="postalCode" value={currentAddress.postalCode} onChange={e => setCurrentAddress({ ...currentAddress, postalCode: e.target.value || '' })} />
                <input type="text" id="city" value={currentAddress.city} onChange={e => setCurrentAddress({...currentAddress, city: e.target.value || ''})} />
            </div>
            </div>

        <div className="form-group">
          <label htmlFor="regularity">Regularność:</label>
          <select id="regularity" value={currentRegularity} onChange={e => setCurrentRegularity(parseInt(e.target.value))} >
            <option value="">Wybierz</option>
            <option value="1">Raz w tygodniu</option>
            <option value="2">Dwa razy w tygodniu</option>
            <option value="3">Raz w miesiącu</option>
            <option value="4">Dwa razy w miesiącu</option>
            <option value="5">Raz</option>
            <option value="6">Inna</option>
          </select>
        </div>
        
        <div className="form-group">
          <button type="submit"onClick={handleUpdateOffer}> Zapisz</button>
          <button type="button"onClick={onClose} >Anuluj</button>
          <button className="close-button" onClick={onClose}>
          <span>&times;</span>
        </button>
        </div>
      </form>
    </div>
  );
};

export default EditOffer;
