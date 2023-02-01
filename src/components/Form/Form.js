import { Box, Button, Title } from '@mantine/core';
import First from './SignUp';
import Second from './PersonalInfo';
import Third from './LocalInfo'
import './first.scss'
import React,{useEffect,useState} from 'react';
import SignUp  from './SignUp';
import PersonalInfo from './PersonalInfo';
import LocalInfo from './LocalInfo'
import { motion } from "framer-motion";


function Form() {
    const [x, setX] = useState(0);

    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: "",
        nickname: "",
        email: "",
        address: "",
        nationality: "",
        zipcode: "",
        highestQualification: "", 
        occupation: "",
        about: "",
      });

    const [page, setPage] = useState(0);

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
        />,
       
      ];
      

    return (
      <div className="progress-bar-container">
        <div className="formX">
      <div className="progress-bar">
      <div style={{width: page === 0? "33%": page === 1? "66%": page === 2? "100%" : "100%"}}></div>

      </div>
      
      <div>{componentList[page]}</div>
    </div>
    </div>
    );
  }
  export default Form;