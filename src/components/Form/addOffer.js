import axios from 'axios';

const BASE_URL = 'https://localhost:7052/api/offers';

export const addOffer = async (offerData, userId) => {
    try {
        console.log(`Przed axios postem ${offerData}`);
        const response = await axios.post(`${BASE_URL}/user/${userId}`, offerData,{ withCredentials: true }, {
          
        });
        console.log(offerData);
        if (response.status === 200) {
          alert("Dodano poprawnie ofertę")
          return { success: true };
        } else {
          console.log(offerData);
          return { success: false, message: 'An error occurred while adding the offer' };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: 'An error occurred while adding the offer' };
    }
};
