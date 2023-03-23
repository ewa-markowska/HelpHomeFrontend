import Cookies from 'js-cookie';

export const updateOffer =  (offerId, description, priceOffer, address, regularity) => {
    const roleId = Cookies.get('Role');
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: description,
        priceOffer: priceOffer,
        address: address,
        regularity: regularity
      })
    };
    return fetch(`https://localhost:7052/api/offers/${offerId}?roleId=${roleId}`, requestOptions)
      .then(response => response.json());
  };