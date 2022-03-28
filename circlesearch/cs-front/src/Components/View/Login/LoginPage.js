import { TextField, Box, Button, Container, Grid, Link } from '@mui/material';
import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../../Slices/authSlice';
import axios from 'axios';

function LoginPage(props) {
    // const auth = useSelector(state => state.auth.login)
    // const dispatch = useDispatch()
    let navigate = useNavigate();
    
    const [userStatus, setuserStatus] = useState(props.userState);
    const [userID, setuserID] = useState("");
    const [userPW, setuserPW] = useState("");

    //로그인 확인을 위한 함수
    const onUserStateChange = async() => {
        setuserStatus({
                ...userStatus, 
                isLogin : true,
                userid : userID,
        });
        props.onChange(userID)
    }


    const onIDHandler = (event) => {
        setuserID(event.currentTarget.value)
    }
    const onPWHandler = (event) => {
        setuserPW(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        let body = {
            id : userID,
            pw : userPW,
        }
        console.log(body)
        axios.post("/user/login", body).then((res) => {
            if (res.data === 1){
                onUserStateChange().then(navigate("/", {replace: true}))
            } else {
                alert('로그인 실패!');
            }
        }).catch((err) => console.log(err));
    }
        

    return (
        <div>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: 'white',
                        borderRadius: 4,
                        borderColor: 'grey.500',  
                        padding: 2
                    }}>
                    <Box component="form" onSubmit={onSubmitHandler} sx={
                        { mt: 1 }
                    }>
                        <h2>로그인</h2>
                        <TextField required margin="normal" id="outlined-required" fullWidth label="아이디" color="success" value={userID} onChange={onIDHandler} />
                        <TextField required margin="normal" id="outlined-password-input" fullWidth label="비밀번호" type="password" color="success" value={userPW} onChange={onPWHandler} />
                        <br />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color='success'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            로그인 하기
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    아이디 찾기
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    회원가입 하기
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default LoginPage;
