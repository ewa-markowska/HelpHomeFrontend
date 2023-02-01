import React,{useEffect,useState} from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Register from './components/pages/Register/Register'
import Login from './components/pages/Login/Login';
import AddOffer from './components/pages/AddOffer/AddOffer'
import Profile from './components/pages/Profile/Profile';
import Form from "./components/Form/Form";
import Filter from "./components/Filter";







function App() {

  const router=createBrowserRouter([
    {
    path : "/logowanie",
    element:<Login/>,
    },
    {
      path : "/rejestracja",
      element:<Register/>,
      },
  ])

  return (
    <>
    <Router>
    <Navbar />
    <Routes>

    <Route path="/" element={<Home />}></Route>
    <Route path="/rejestracja" element={<Register />}></Route>
    <Route path="/logowanie" element={<Login />}></Route>
    <Route path="/dodajoferte" element={<Form />}></Route>
    <Route path="/Profile/:SeekerId" element={<Profile />}></Route>
    <Route path="/Form" element={<Form />}></Route>
    <Route path="/Filter" handler={<Filter />}></Route>
   
    </Routes>

    </Router>
    
    </>
     
     
   
  );
}

export default App;
