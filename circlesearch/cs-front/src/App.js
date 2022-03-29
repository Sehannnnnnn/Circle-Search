import './App.css';
import React, {useState, useEffect} from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Components/View/Home/HomePage';
import LoginPage from './Components/View/Login/LoginPage';
import TopPannel from './Components/TopPannel/TopPannel';
import RegisterPage1 from './Components/View/Register/RegisterPage1';
import RegisterPage2 from './Components/View/Register/RegisterPage2';
import { Container } from '@mui/material';
import RegisterPage3 from './Components/View/Register/RegisterPage3';
import RegisterComplete from './Components/View/Register/RegisterComplete';
import CircleUnionPage from './Components/View/CircleUnion/CircleUnionPage';

function App() {
  const [userState, setuserState] = useState({
    logined : false,
    userid : null,
    usernickname : null,
  });

  return (
    <div className="App">
    <TopPannel/>
    <div className='wrapper'>
    <Container maxWidth= "sm" className='left_sidebar'>
      <LoginPage/>
    </Container>
    <Container maxWidth="xl" className='main_container'>
    <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/Circle/Union/List" element={<CircleUnionPage/>}/>
        <Route path="/register1" element={<RegisterPage1/>}/>
        <Route path="/register2/:userID" element={<RegisterPage2/>}/>
        <Route path="/register3/:userID" element={<RegisterPage3/>}/>
        <Route path="/register/complete" element={<RegisterComplete/>}/>
    </Routes>
    </Container>
    <Container maxWidth= "sm" className='right_sidebar'>
    </Container>
    </div>
    </div>
  );
}

export default App;

