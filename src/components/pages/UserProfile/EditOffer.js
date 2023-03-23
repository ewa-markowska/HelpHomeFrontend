import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { updateOffer } from './updateOffer';

const EditOffer = ({ offerId, onClose, onEditOffer, price, address, regularity }) => {
//   const { offerId } = useParams();
console.log("EditOffer component rendered");
  const [description, setDescription] = useState('');
  const [currentPrice, setCurrentPrice] = useState(price);
  const [currentAddress, setCurrentAddress] = useState(address);
  const [currentRegularity, setCurrentRegularity] = useState(regularity);
  const [error, setError] = useState('');
//   const offerId = localStorage.getItem("offerId");

  useEffect(() => {
    console.log(`Editing offer id ${offerId}`)
    if (!offerId) {
        return;
      }
      fetch(`https://localhost:7052/api/offers/${offerId}`)
        .then(response => response.json())
        .then(data => {
          setDescription(data.description);
          setCurrentPrice(data.priceOffer);
          setCurrentAddress(data.address);
          setCurrentRegularity(data.regularity);
        })
        .catch(error => {
          console.error(error);
          setError('Something went wrong while fetching the offer data');
        });
    }, [offerId]);

  const handleUpdateOffer = (e) => {
    e.preventDefault();
    const offerId = localStorage.getItem("offerId");
   console.log(`updating offer with id ${offerId}`);
    updateOffer(offerId, description, currentPrice, currentAddress, currentRegularity)
      .then(result => {
        if (result.success) {
          onClose(true);
          onEditOffer(result.offer);
        } else {
          throw new Error(result.message);
        }
      })
      .catch(error => {
        console.error(error);
        setError('Something went wrong while updating the offer');
      });
  }


  return (
    <div className="edit-profile">
      <h2>Edytuj ofertę</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleUpdateOffer}>
        <div className="form-group">
          <label htmlFor="description">Opis:</label>
          <textarea id="description" value={description} onChange={e => setDescription(e.target.value || '')} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Cena:</label>
          <input type="number" id="price" value={currentPrice} onChange={e => setCurrentPrice(e.target.value || '')} />

        </div>
        <div className="form-group">
          <label htmlFor="address">Adres:</label>
          <input type="text" id="address" value={currentAddress} onChange={e => setCurrentAddress(e.target.value ||'')}  />
        </div>
        <div className="form-group">
          <label htmlFor="regularity">Regularność:</label>
          <select id="regularity" value={currentRegularity} onChange={e => setCurrentRegularity(e.target.value||'')} >
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
          <button type="submit">Zapisz</button>
          <button type="button" onClick={() => onClose(false)}>Anuluj</button>
        </div>
      </form>
    </div>
  );
};

export default EditOffer;
