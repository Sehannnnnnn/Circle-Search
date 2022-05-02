import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Divider, Grid} from '@mui/material'
import CircleInSchoolPage from '../CircleInSchool/CircleInSchoolPage';
import MainBanner from '../Banner/MainBanner';
import CircleInterest from '../Home/CircleInterest';
import CommunityModal from './CommunityModal';

function HomePage() {
  const [message, setMessage]=useState([]);
  const [userID, setuserID] = useState("");
  const [isLogined, setisLogined] = useState('false');


    useEffect(()=>{
      axios.get("/hello")
          .then((res)=>{
            setMessage(res.data)
          });
      if (sessionStorage.getItem('islogined') === 'true') {
        setuserID(sessionStorage.getItem('userID'));
        setisLogined(sessionStorage.getItem('logined'));
      }
    },[]);

    console.log(message);
      return(
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
            <CommunityModal />
            <Divider></Divider>
          </Grid>
        </Grid>
      </div>)
}

export default HomePage;
