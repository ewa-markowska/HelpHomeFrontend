import Cookies from 'js-cookie';
import axios from 'axios';

const BASE_URL = 'https://localhost:7052/api/offers';

export const updateOffer = async (offerId, dto) => {
    const roleId = parseInt(Cookies.get('Role'));
    console.log(`updateOffer: Role ID from cookies w metodzie update offer : ${roleId}`);
    console.log(`updateOffer: offer id przed put : ${offerId}`);
    
   
    try {
      if (roleId !== 1 && roleId !== 2) {
          return { success: false, message: "Only users with role id 1 or 2 can update an offer" };
      }
      const updateData = {
        name: dto.name,
        description: dto.description,
        priceOffer: dto.priceOffer,
        address: {
          city: dto.address.city,
          street: dto.address.street,
          postalCode: dto.address.postalCode
        },
        regularity: dto.regularity,
        updateDate: dto.updateDate
      };
      const response = await axios.put(`${BASE_URL}/${offerId}`, updateData, {
        withCredentials: true
      });
      console.log(response.data);
  
      
      if (response.status === 200) {
        alert('Offer updated successfully');
        return { success: true, offer: response.data.offer };
      } else {
        alert(response.data.message);
       
        return { success: false, message: response.data.message };
      }
  
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: 'An error occurred while updating the offer'
      };
    }
  };

  
