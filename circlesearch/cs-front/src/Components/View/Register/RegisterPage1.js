import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Divider, Grid} from '@mui/material';
import { Box } from '@mui/system';
import kakao_start_png from './elements/kakao_login_medium_wide.png';
import {
    KAKAO_AUTH_URL_SIGNUP,
  } from '../Login/SocialLogin/kakao_config'

function RegisterPage1() {
    const regExpEm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; 
    const regExpPw = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/; //비밀번호 8자리~ 16자리 숫자, 문자,특수기호 최소 1회
    const regExpId = /^[0-9a-z]{5,20}$/; //5~20자리 영문 숫자만 입력가능
    const navigate = useNavigate();
    const [userID, setuserID] = useState("");
    const [userPW, setuserPW] = useState("");
    const [userCheckPW, setuserCheckPW] = useState(""); 
    const [userEmail, setuserEmail] = useState("");
    const [userCheckID, setuserCheckID] = useState(false)

    const onIdHandler = (event) => { 
        setuserID(event.currentTarget.value)
    }
    const onPwHandler = (event) => {
        setuserPW(event.currentTarget.value)
    }
    const onCheckPwHandler = (event) => {
        setuserCheckPW(event.currentTarget.value)
    }
    const onEmailHandler = (event) => {
        setuserEmail(event.currentTarget.value)
    }

    const onCheckIDHandler = (event) => {
        event.preventDefault()
        axios.get('/user/register1/checkID', {params : {userID: userID}}).then((response) => {
            if (response.data === 1) {
                alert("아이디가 중복되었습니다.")
                return false
            } else {
                alert("사용할 수 있는 아이디입니다.")
                setuserCheckID(true)
                return true
            }
        })
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (userCheckID === false) {
            alert("아이디 중복체크를 해주세요.")
            return false
        } else {
            console.log(userID, userPW)
            let body = {
            user_id : userID,
            user_password : userPW,
            user_email : userEmail,
        }
        axios.post('/user/register1',body).then((response) => {
            if(response.status == 200) navigate(`../register2/${userID}`, {replace: true});
            else alert('error')
        })
        }
    }
    const validateID = () => {
        if (userID === "") return false
        else return !regExpId.test(userID)
    }
    
    const validatePW = () => {
        if (userPW === "") return false
        else return !regExpPw.test(userPW)
    }
    
    const validateCheckPW = () => {
        if (userCheckPW === "") return false
        else return userPW !== userCheckPW
    }
    const validateEmail = () => {
        if (userEmail === "") return false
        else return !regExpEm.test(userEmail)
    }
    console.log(userPW, userCheckPW, userPW === userCheckPW)
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
            <h2>서클서치 회원가입</h2>
            <p>환영합니다! <br></br>서클서치가 당신과 함께 할 딱 맞는 동아리를 찾아드릴께요.</p>
            <Divider></Divider>
            <h3>간편 회원가입</h3>
                <a href = {KAKAO_AUTH_URL_SIGNUP}>
                <img src={kakao_start_png}/>
                </a>
            <Divider sx={{mt:3}}></Divider>
            <Box component="form" onSubmit={onSubmitHandler} sx={{maxwith: 'sm'}}>
                <Grid container rowspacing={1}>
                <h3>회원 정보 직접 입력</h3>   
                    <Grid item xs={12} sx={{mb: 1}}>
                        <TextField required margin="normal" label="아이디" variant="filled" fullWidth value={userID} color='success'
                        error={validateID()} onChange={onIdHandler} helperText ={validateID()? "아이디는 5~20자리 영문,숫자 입니다.": ""}/>
                    </Grid>
                    <Grid item xs={6} sx={{mb: 1}}>
                        <Button variant={userCheckID ? "contained":"outlined"} onClick={onCheckIDHandler} color='success'>아이디 중복체크</Button>
                    </Grid>
                    <Grid item xs={12} sx={{mb: 1}}>
                        <TextField required margin='normal' label="패스워드" variant="filled" fullWidth type="password" color='success' value={userPW} onChange={onPwHandler} error={validatePW()} helperText={validatePW()? "패스워드는 8~16자리 영문,숫자,특수기호 입니다." : ""}/>
                    </Grid>
                    <Grid item xs={12} sx={{mb: 1}}>
                        <TextField required margin='normal' label="패스워드확인" variant="filled" fullWidth type='password' color='success' value={userCheckPW} onChange={onCheckPwHandler} error={validateCheckPW()} helperText={validateCheckPW()? "패스워드가 일치하지 않습니다.": ""}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required margin='normal' id='outlined-requried' variant="filled" label='이메일' fullWidth type='email' color='success' sx = {{marginBottom:3}}value={userEmail} onChange={onEmailHandler} error={validateEmail()} helperText={validateEmail() ? "이메일 형식과 맞지않습니다.":""}/>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={validateID() && validatePW() && validateCheckPW() && !userCheckID && validateEmail()}
                    color='success'
                    sx={{ mt:5, mb: 2,
                    height: '50px' }}
                    >
                    다음 단계 진행
                    </Button> 
                <Divider sx={{marginTop: 5, marginBottom: 5}}></Divider>
            </Box>
        </Box>
    </Container>
    </div>
    )
}
export default RegisterPage1;