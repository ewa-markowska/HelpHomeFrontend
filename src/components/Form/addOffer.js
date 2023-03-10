import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/offers';

export const addOffer = async (offerData, userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/${userId}`, offerData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
