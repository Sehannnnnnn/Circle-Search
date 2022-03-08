import React, {useState} from 'react';
import { ConfirmPW, ValidateEmail, ValidateID, ValidatePW } from './confirmRegister';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Divider } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { Box } from '@mui/system';

function RegisterPage1() {

    const [userID, setuserID] = useState("");
    const [userPW, setuserPW] = useState("");
    const [userCheckPW, setuserCheckPW] = useState("");
    const [userName, setuserName] = useState("");
    const [userBirth, setuserBirth] = useState("");
    const [userEmail, setuserEmail] = useState("");

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
    const onNameHandler = (event) => {
        setuserName(event.currentTarget.value)
    }
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(userID, userPW)
        let body = {
            id : userID,
            pw : userPW,
            name : userName,
            birth : userBirth,
            email : userEmail,
        }
        console.log(body)
        axios.post('/user/register1',body).then((response) => {
            console.log(response.status);
        })
    }
  return (
  <div>
    <Container component="main" minWidth="sm">
        <Box
            sx={{
                marginTop: 5,
                display: 'flex',
                minWidth: 'sm',
                flexDirection: 'column',
                border: 2,
                bgcolor: 'white',
                borderRadius: 5,
                borderColor: 'grey.500',  
                padding: 10
            }}>
            <h2>회원가입</h2>
            <Divider></Divider>
            <h3>로그인 정보</h3>
            <Box component="form" onSubmit={onSubmitHandler} sx={{mt:1}}>
            <ValidateID userID={userID}/>
                <TextField required margin="normal" id="outlined-required" label="아이디"
                fullWidth value={userID} onChange={onIdHandler}/>
            <Button>아이디 중복체크</Button>
            <ValidatePW userPW={userPW}/>
                <TextField required margin='normal' id='outlined-password-input'  fullWidth label="비밀번호" type="password" color='success' value={userPW} onChange={onPwHandler}/>
                <TextField required margin='normal' id='outlined-requried' label='비밀번호 확인' fullWidth type='password' color='success' value={userCheckPW} onChange={onCheckPwHandler}/>
                <ConfirmPW userPW={userPW} userCheckPW={userCheckPW}/>
                <Divider sx={{marginTop: 5, marginBottom: 5}}></Divider>
            <h3>회원 정보</h3>
                <TextField required margin="normal" id="outlined-required" label="이름" fullWidth value={userName} onChange={onNameHandler}/>
                <ValidateEmail userEmail={userEmail}/>
                <TextField required margin='normal' id='outlined-requried' label='이메일' fullWidth type='email' color='success' sx = {{marginBottom:3}}value={userEmail} onChange={onEmailHandler}/>
                <p>생년 월일을 선택해 주세요</p>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    displayStaticWrapperAs="desktop"
                    openTo="year"
                    value={userBirth}
                    margin="normal"
                    label='생년 월일'
                    onChange={(newValue) => {
                    setuserBirth(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
                <br/>
                <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color='success'
                            sx={{ mt: 10, mb: 2,
                            height: '50px' }}
                        >
                            다음 단계 진행
                        </Button>
            </Box>
        </Box>
    </Container>
    </div>
    )
}
export default RegisterPage1;