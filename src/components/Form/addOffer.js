import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'https://localhost:7052/api/offers';

export const addOffer = async (offerData, userId) => {
  try {
    console.log(`Przed axios postem ${offerData}`);
    const authToken = Cookies.get("authToken"); // get the auth token from the cookie
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`; // set the auth token for all axios requests
    const response = await axios.post(
      `${BASE_URL}/user/${userId}`,
      offerData,
      { 
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${authToken}`, // set the auth token in the headers
        },
      }
    );
    console.log(`The auth token is: ${authToken}`);
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    if (response.status === 200) {
      alert("Dodano poprawnie ofertę");
      return { success: true };
    } else {
      console.log(offerData);
      return {
        success: false,
        message: "An error occurred while adding the offer",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while adding the offer",
    };
  }
};
