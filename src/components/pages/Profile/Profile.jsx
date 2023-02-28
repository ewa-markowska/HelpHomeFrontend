import './profile.scss';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Profile({ userId }) {
  const { Id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://localhost:7052/api/users/${Id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        console.log(data); // add this line
      })
      .catch(error => console.log(error));
  }, [Id]);
  

  return (
    <div className='profile'>
      <div className='images'></div>
      <img src={require('./img10.jpg')} className='cover' alt='' />
      <img src={require('./user1.png')} alt='' className='profilePic'/>
      <div className='profilecontainer'>
        <div className='userInfo'>
          <div className='leftSide'>
            <a><i className="fa-solid fa-phone"></i></a>
            <a><i className="fa-solid fa-envelope"></i></a>
            <div className="vl"></div>
          </div>
          <div className='centerSide'>{user.name} user ID:{user.id}</div>
          <div className="vl"></div>
          <div className='rightSide'>
          </div>
        </div>
        <div>
        {user.offerDtos && user.offerDtos.map(offerDto => {
  console.log(offerDto); // add this line
  return (
    <div className="info-container" key={offerDto.id}>
      <p>Typ oferty: {offerDto.name}</p>
      <p>Opis oferty: {offerDto.description}</p>
      <p>Cena usługi: {offerDto.priceOffer}</p>
      {offerDto.address && <p>Adres: {offerDto.address}</p>}
    </div>
  );
})}
</div>

      </div>
    </div>
  )
}

export default Profile
