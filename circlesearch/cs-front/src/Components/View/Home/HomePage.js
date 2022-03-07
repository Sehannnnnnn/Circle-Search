import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';

function HomePage() {
  const [message, setMessage]=useState([]);
  const loginCheck = useSelector(state => state.auth.login)
  
    useEffect(()=>{
      axios.get("/hello")
          .then((res)=>{
            setMessage(res.data)
          });
    },[]);

    console.log(loginCheck)
  return (
  <div>
     <h1>{message}</h1>
     <span>
          {loginCheck}
    </span>
      <button><Link to="/login">로그인 하기</Link></button>
  </div>
  );
}

export default HomePage;
