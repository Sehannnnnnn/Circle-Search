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
import CircleUnion from './Components/View/CircleUnion/CircleUnion';
import CommunityPage from './Components/View/Community/CommunityPage';
import CommunityWritePage from './Components/View/Community/CommunityWritePage';
import CreateCirclePage from './Components/View/CreateCircle/CreateCirclePage';
import Footer from './Components/Footer/Footer';
import CircleSiteBase from './Components/View/CircleSite/CircleSiteBase';

function App() {
  // if (!userState.logined) {
  //   return (
  //     <div className="App">
  //       <LandingPage />
  //     </div>
  //   )
  // } 
  return (
    <div className="App">
    <TopPannel/>
    <div className='wrapper'>
    <Container maxWidth= "sm" className='left_sidebar'>
      <LoginPage/>
    </Container>
    <Container maxWidth="lg" className='main_container'>
    <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/circle/union/list" element={<CircleUnionPage/>}/>
        <Route path="/register1" element={<RegisterPage1/>}/>
        <Route path="/register2/:userID" element={<RegisterPage2/>}/>
        <Route path="/register3/:userID" element={<RegisterPage3/>}/>
        <Route path="/register/complete" element={<RegisterComplete/>}/>
        <Route path="/circle/union/:CircleID/:Page" element={<CircleUnion/>}/>
        <Route path="/community" element={<CommunityPage/>}/>
        <Route path="/community/write" element={<CommunityWritePage/>}/>
        <Route path="/create/circle/new" element={<CreateCirclePage/>}/>
        <Route path="/Circle/:circleID" element={<CircleSiteBase/>}/>
    </Routes>
    </Container>
    <Container maxWidth= "sm" className='right_sidebar'>
    </Container>
    </div>
    <Footer/>
    </div>
  );
}

export default App;

