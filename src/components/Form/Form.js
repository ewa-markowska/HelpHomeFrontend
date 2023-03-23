import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOffer } from './addOffer';
import SignUp from './SignUp';
import LocationInfo from './PersonalInfo';
import LocalInfo from './LocalInfo';
import { setUserLoginStatus } from '../actions';
import { isLoggedInSelector } from '../reducers';
import './first.scss';
import Cookies from 'js-cookie';


function Form() {
  

  const userId = useSelector((state) => state.userId);
  const [x, setX] = useState(0);
  const [formData, setFormData] = useState({
    offertype: '',
    name: '',
    description: '',
    createdDate: new Date().toISOString(),
    priceOffer: 0,
    regularity: null,
    address: {
      city: '',
      street: '',
      postalCode: ''
    },
    userId: 0
  });
  const [page, setPage] = useState(0);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();

  const componentList = [
    <SignUp
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <LocationInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      regularity={formData.regularity}
      setRegularity={(value) =>
        setFormData({ ...formData, regularity: value })
      }
      offertype={formData.offertype}
      setOffertype={(value) =>
        setFormData({ ...formData, offertype: value })
      }
    />,
    <LocalInfo
    formData={formData}
    setFormData={setFormData}
    page={page}
    setPage={setPage}
    x={x}
    setX={setX}
    onSubmit={async () => {

      const roleId = Cookies.get('Role');
      console.log(`Role ID from cookies while adding offer: ${roleId}`);
      if (validateForm()) {
        try {
          console.log('User ID:', userId);
          console.log(formData);
         
         

          const response = await addOffer(formData, userId, roleId);
          if (response.success) {
            alert('Offer added successfully');
          } else {
            alert(response.message);
          }
        } catch (error) {
          console.log(error.response.data);
          alert('An error occurred while adding the offer');
        }
      }
    }}
  />,
];
  const validateForm = () => {
    if (page === 0) {
      if (!formData.name || !formData.description) {
        alert('Please enter the name and description of your offer.');
        
        return false;
      }
    } else if (page === 1) {
      if (!formData.address || !formData.priceOffer) {
        alert('Please enter the address and price of your offer.');
        return false;
      }
    }

    return true;
  };

  const currentComponent = page > 0 ? componentList[page] : null;

  const handleLogin = () => {
    dispatch(setUserLoginStatus(true));
  };

  const handleLogout = () => {
    dispatch(setUserLoginStatus(false));
  };

  return (
    <div className="progress-bar-container">
      <div className="formX">
        <div className="progress-bar">
          <div
            style={{
              width:
                page === 0 ? '33%' : page === 1 ? '66%' : page === 2 ? '100%' : '100%',
            }}
          ></div>
        </div>
        {!isLoggedIn && page === 0 && (
          <SignUp
            formData={formData}
            setFormData={setFormData}
            page={page}
            setPage={setPage}
            x={x}
            setX={setX}
            onLogin={handleLogin}
          />
        )}
        {isLoggedIn && (
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
        <div>{currentComponent}</div>
      </div>
    </div>
  );
}

export default Form;