import { TextField, Box, Button, Container, Grid, Link } from '@mui/material';
import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { loginSuccess } from '../../../Slices/authSlice';
// import MainBanner from '../Banner/MainBanner';
// import session from 'express-session';
// import { set } from 'date-fns';
import axios from 'axios';

import SingleListAvatar from '../../Avatar/SingleListAvatar';

function LoginPage(props) {
    // const auth = useSelector(state => state.auth.login)
    // const dispatch = useDispatch()
    let navigate = useNavigate();
    
    const [userID, setuserID] = useState("");
    const [userPW, setuserPW] = useState("");
    const [isLogined, setisLogined] = useState(
        sessionStorage.getItem('islogined') == 'true');
    //로그인 정보 sessionStorage 저장
    
    //userID로 현재 가입된 동아리 list 보기 [동아리 명, 동아리 로고] (api)
    const [showcirclelist, setshowcirclelist] = useState(false)
    const [mycircleList, setmycircleList] = useState([
        { 
            name : '큐시즘',
            logo : 'img'
        }, {
            name: '잔디',
            logo: 'img2'
        }, {
            name: '한국홍보대사연합',
            logo: 'img3'
        }
     ])


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
                console.log('success')
                sessionStorage.setItem('islogined', 'true');
                sessionStorage.setItem('userID', userID);
                setisLogined(true);
                navigate("/", {replace: true});
            } else {
                alert('로그인 실패!');
            }
        }).catch((err) => console.log(err));
    }

    const logout = () => {
        setisLogined(false);
        sessionStorage.clear();
    }

    const openMyCircleList = () => {
        setshowcirclelist(true)
    }

    const moveToMyPage = () => {

    }

    const openCreateCircle = () => {
        navigate("/create/circle/new", {replace: true});
    }
        
    if (!isLogined) {
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
    } return (
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
                <Grid container spacing={2}>
                    <Grid item xs={10} sx={{mr : 3}}>
                    {sessionStorage.getItem('userID')} 님 환영합니다.
                    </Grid>
                    <Grid item xs={12}>
                    <Button onClick={openMyCircleList} fullWidth variant='contained' color='success'>내 동아리</Button>
                    </Grid>
                    <Grid item xs={12}>
                    <Button onClick={openCreateCircle} fullWidth variant='contained' color='success'>동아리 새로 만들기</Button>
                    </Grid>
                    <Grid item xs={6}>
                    <Button onClick={logout} variant='outlined' fullWidth color='success'>로그아웃</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={moveToMyPage} variant='outlined' color='success' fullWidth>
                            마이페이지
                        </Button>
                    </Grid>
                    { showcirclelist ? <SingleListAvatar/> : null}
                    </Grid>
            </Box>
    </Container>
    </div>)
}

export default LoginPage;
