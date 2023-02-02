
import './profile.scss';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Profile() {
  const { Id } = useParams();
  const [user, setUser] = useState({});
 
  // https://localhost:7026/api/seekers/${SeekerId}

  useEffect(() => {
    fetch(`https://localhost:7052/api/users/${Id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [Id]);

  return (
      
      <div className='profile'>
        <div className='images'></div>
        <img src={require('./img10.jpg',)} className='cover'></img>
        <img src={require('./user1.png')} alt='' className='profilePic'/>
      <div className='profilecontainer'>
        <div className='userInfo'>
            <div className='leftSide'>
                <a><i class="fa-solid fa-phone"></i></a>
                <a><i class="fa-solid fa-envelope"></i></a>
                <div class="vl"></div>
               
                
                </div>
            <div className='centerSide'>{user.name}</div>
            <div class="vl"></div>
            <div className='rightSide'>Katowice, śląskie</div>
            
            
            
            
        </div>
        <div className='user-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur qui minima distinctio quo, accusantium error, inventore delectus dignissimos eius eaque ut aut eum ipsa quidem voluptatibus dolorem sequi. Natus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur qui minima distinctio quo, accusantium error, inventore delectus dignissimos eius eaque ut aut eum ipsa quidem voluptatibus dolorem sequi. Natus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur qui minima distinctio quo, accusantium error, inventore delectus dignissimos eius eaque ut aut eum ipsa quidem voluptatibus dolorem sequi. Natus!
        
      
        
        </div>
        
        
      </div>
      
    </div>
  )
}

export default Profile
