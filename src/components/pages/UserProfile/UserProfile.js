import './userProfile.scss';
import { useParams } from 'react-router-dom';
import React, {  useEffect,useState } from 'react';
import{useCookies} from 'react-cookie';


function UserProfile() {
  const { userId } = useParams();
  
  const [data, setData] = useState([]);

  const toppings1 = [
    {
      name: "RazWTygodniu",
    },
    {
      name: "DwaRazyWTygodniu",
    },
    {
      name: "RazWMmiesiącu",
    },
    {
      name: "DwaRazyWMiesiącu",
    },
    {
      name: "Raz",
    },
    {
      name: "Inna",
    },
  ];

  function getRegularityString(regularity) {
    const topping = toppings1[regularity - 1];
    return topping ? topping.name : "";
  }


  useEffect(() => {
    fetch(`https://localhost:7052/api/offers/user/${userId}`)
    .then(response => response.json())
    .then(data => setData(data));
}, [userId]);


  return (
    <div className='profile'>
      <div className='images'></div>
      <img src={require('./clean.png')} className='cover' alt='' />
      <img src={require('./user1.png')} alt='' className='profilePic'/>
      <div className='profilecontainer'>
        <div className='userInfo'>
          <div className='leftSide'>
            {/* <a><i className="fa-solid fa-phone"></i></a>
            <a><i className="fa-solid fa-envelope"></i></a> */}
            <div className="vl"></div>
          </div>
          <div className='centerSide'>Witaj {userId || ''}!</div>
          <div className="vl"></div>
          <div className='rightSide'>
          </div>
        </div>
        <div>
          {data && data.map(offerDto => {
            console.log(offerDto); 
            return (
              <div className="info-container" key={offerDto.id}>
                <p>Typ oferty: {offerDto.name}</p>
                <p>Opis oferty: {offerDto.description}</p>
                <p>Cena usługi: {offerDto.priceOffer}</p>
                <p>Regularność: {getRegularityString(offerDto.regularity) && (
                <p>Regularność: {getRegularityString(offerDto.regularity)}</p>)}</p>
                {offerDto.address && <p>Adres: {offerDto.address.city}</p>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="info-container">
        <p>Eventy:</p>
      </div>
      <div className="info-container">
        <p>Wiadomości:</p>
      </div>
      <div className="info-container">
        <p>Oferty:</p>
      </div>
      <div className="info-container">
        <p>Zablokowani użytkownicy:</p>
      </div>
      <div className="info-container">
        <p> Ulubieni użytkownicy:</p>
      </div>
    </div>
  )
}

export default UserProfile;
