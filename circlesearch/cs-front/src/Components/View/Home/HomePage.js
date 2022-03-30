import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {Divider, Grid} from '@mui/material'
import CircleInSchoolPage from '../CircleInSchool/CircleInSchoolPage';
import MainBanner from '../Banner/MainBanner';
import CircleInterest from '../Home/CircleInterest';
import Community_modal from './Community_modal';

function HomePage() {
  const [message, setMessage]=useState([]);
  const loginCheck = useSelector(state => state.auth.login)

    useEffect(()=>{
      axios.get("/hello")
          .then((res)=>{
            setMessage(res.data)
          });
    },[]);
    console.log(message);
    console.log(loginCheck);
  return (
  <div>
    <Grid container rowspacing={3}>
      <Grid item xs={12} sx= {{mb: 3}}>
        <MainBanner/>
        <Divider></Divider>
      </Grid>
      <Grid item xs={12} sx= {{mb: 3}}>
        <CircleInterest />
        <Divider></Divider>
      </Grid>
      <Grid item xs={12} sx= {{mb: 3}}>
        <Divider></Divider>
      </Grid>
      <Grid item xs={12} sx= {{mb: 3}}>
        <CircleInSchoolPage/>
        <Divider></Divider>
      </Grid>
      <Grid item xs={12} sx= {{mb: 3}}>
        <h2>실시간 커뮤니티 게시글</h2>
        <Community_modal/>
        <Divider></Divider>
      </Grid>
    </Grid>
  </div>
  );
}

export default HomePage;
