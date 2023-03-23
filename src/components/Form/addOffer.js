import axios from 'axios';




const BASE_URL = 'https://localhost:7052/api/offers';

export const addOffer = async (offerData, userId, roleId) => {
  try {
    console.log(`Role id z cookies przed dodaniem oferty w add offer ${roleId}`);
    if (roleId !== "1" && roleId !== "2") {
      return { success: false, message: "Only users with role id 1 or 2 can add an offer" };
    }

    const response = await axios.post(`${BASE_URL}/user/${userId}`, offerData, {
      withCredentials: true
    });

    if (response.data.success) {
      alert('Offer added successfully');
    } else {
      alert(response.data.message);
    }

    return { success: response.data.success };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'An error occurred while adding the offer'
    };
  }
};
