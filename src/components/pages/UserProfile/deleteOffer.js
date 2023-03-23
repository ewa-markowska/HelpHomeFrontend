import axios from 'axios';

const BASE_URL = 'https://localhost:7052/api/offers';

export const deleteOffer = async (offerId, roleId) => {
  try {
    console.log(`Role id z cookies przed usunieciem oferty w delete offer ${roleId}`);

    if (roleId !== "1" && roleId !== "2") {
      return { success: false, message: "Only users with role id 1 or 2 can delete an offer" };
    }

    const response = await axios.delete(`${BASE_URL}/${offerId}`, {
      withCredentials: true
    });

    if (response.status === 204) {
      alert('Offer deleted successfully');
      return { success: true, message: 'Offer deleted successfully' };
    } else {
      alert(response.data.message);
      return { success: false, message: response.data.message };
    }

  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'An error occurred while deleting the offer'
    };
  }
};