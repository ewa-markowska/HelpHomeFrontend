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
  
    if (response.status === 200) {
      alert('Offer added successfully');
      return { success: true, message: response.data.message };
    } else {
      alert(response.data.message);
      return { success: false, message: response.data.message };
    }
  
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'An error occurred while adding the offer'
    };
  }
};  
