import { TextField, Box, Button, Container, Grid, Link } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../../Slices/authSlice';

function LoginPage() {
    const auth = useSelector(state => state.auth.login)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const [userID, setuserID] = useState("");
    const [userPW, setuserPW] = useState("");

    const onIDHandler = (event) => {
        setuserID(event.currentTarget.value)
    }
    const onPWHandler = (event) => {
        setuserPW(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        dispatch(loginSuccess())
        navigate("/")
        // let data = {
        //     'ID' : userID,
        //     'PW' : userPW
        // }
        // console.log(data)
        // fetch('/api/login',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         'ID' : userID,
        //         'PW' : userPW
        //         })
        // }).then(resposne => console.log('Success:',resposne))
        // .catch(error => console.error('Error:', error));
    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        border: 2,
                        bgcolor: 'white',
                        borderRadius: 5,
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
