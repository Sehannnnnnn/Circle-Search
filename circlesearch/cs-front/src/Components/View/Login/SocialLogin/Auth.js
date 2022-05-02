import React, { useEffect} from 'react';
import axios from 'axios';
import qs from "qs";
import { useNavigate, useParams } from "react-router-dom";
import {
  REDIRECT_URI_LOGIN,
  REDIRECT_URI_SIGNUP,
  REST_API_KEY,
} from "./kakao_config.js"
import { Container, Box, CircularProgress } from '@mui/material';

function Auth() {
  const params = useParams();
    const code = new URL(window.location.href).searchParams.get("code");
    const use = params.use;
    const REDIRECT_URI = (use === "login" ? REDIRECT_URI_LOGIN : REDIRECT_URI_SIGNUP);
    const navigate = useNavigate();


    const getToken = () => {
      const payload = qs.stringify({
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: code,
      });
      axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      ).then((res) => {
      window.Kakao.init(REST_API_KEY);
      window.Kakao.Auth.setAccessToken(res.data.access_token);
    }).then(() => getProfile())
    .catch ((err) => 
      console.log(err)
    );
  }

  const getProfile = async () => {
    try {
        let data = await window.Kakao.API.request({
            url: "/v2/user/me",
        });
        let body = {
          user_id : data.id,
          user_password : data.id,
          user_email : data.kakao_account.email
        }
        if(use == "login") loginID(body);
        if(use == "signup") postRegister1(body);
    } catch(err) {
        console.log(err);
    }
  }

  //회원가입일때
const postRegister1 = (body) => {
    axios.post('/user/register1',body).then((response) => {
      if(response.status == 200) {
        console.log('성공');
        navigate(`../register2/${body.user_id}`, {replace: true});
      }
      else alert('error')
    });
  }

  //로그인할 때
  const loginID = (body) => {
      axios.post("/user/login", body).then((res) => {
          if (res.data === 1){
              console.log('success')
              sessionStorage.setItem('islogined', 'true');
              sessionStorage.setItem('userID', body.user_id);
          } else {
              alert('로그인 실패!');
          }
      }).catch((err) => console.log(err)).then(() => {
          window.location.href="/";
      })
  }

  useEffect(() => {
    getToken();
  },[]);


  return (
    <div>
         <Container component="main" maxWidth="sm">
        <Box
            sx={{
                display: 'flex',
                maxWidth: 'sm',
                flexDirection: 'column',
                padding: 5,
            }}>
              <CircularProgress color={'success'} sx={{m : '0 auto'}}/>
            </Box>
            </Container>
    </div>
  )
}

export default Auth