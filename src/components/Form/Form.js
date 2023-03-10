import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOffer } from './addOffer';
import SignUp from './SignUp';
import PersonalInfo from './PersonalInfo';
import LocalInfo from './LocalInfo';

import { setUserLoginStatus } from '../actions';
import { isLoggedInSelector } from '../reducers';


import './first.scss';

function Form() {
  const [x, setX] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    address: '',
    priceOffer: 0,
    createdDate: '',
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
    <PersonalInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
    />,
    <LocalInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={setPage}
      x={x}
      setX={setX}
      onSubmit={async () => {
        if (validateForm()) {
          try {
            await addOffer(formData, 1);
            alert('Offer added successfully!');
          } catch (error) {
            console.log(error);
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
