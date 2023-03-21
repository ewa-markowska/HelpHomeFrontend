import axios from 'axios';

const BASE_URL = 'http://localhost:7052/api/offers';

export const addOffer = async (offerData, userId) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/${userId}`, offerData);
      if (response.status === 200) {
        return { success: true };
      } else {
        return { success: false, message: 'An error occurred while adding the offer' };
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
