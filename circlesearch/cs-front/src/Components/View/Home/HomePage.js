import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';
import {Box, Containe, Divider, Grid} from '@mui/material'
import { Circle } from '@mui/icons-material';
import CircleUnionPage from '../CircleUnion/CircleUnionPage';
import CircleInSchoolPage from '../CircleInSchool/CircleInSchoolPage';
import MainBanner from '../Banner/MainBanner';
import CircleInterest from '../CircleUnion/CircleInterest';

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
    </Grid>
  </div>
  );
}

export default HomePage;
