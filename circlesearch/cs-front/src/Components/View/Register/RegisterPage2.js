import React, {useState, useRef} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Divider, Grid} from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { Box } from '@mui/system';

function RegisterPage2() {
  const [userCheckPW, setuserCheckPW] = useState("");
  const [userName, setuserName] = useState("");
  const [userBirth, setuserBirth] = useState("");

  const onNameHandler = (event) => {
        setuserName(event.currentTarget.value)} 
  
  const onSubmitHandler = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <Container component="main" maxWidth="sm">
        <Box
            sx={{
                display: 'flex',
                maxWidth: 'sm',
                flexDirection: 'column',
                border: 2,
                borderColor: 'grey.500',  
                padding: 5
            }}>
            <h2>서클서치 회원가입</h2>
            <Divider></Divider>
            <h3>회원 정보</h3>
            <Box component="form" onSubmit={onSubmitHandler} sx={{maxwith: 'sm'}}>
                <Grid container rowspacing={2}>
                  <TextField required margin="normal" id="outlined-required" label="이름" fullWidth value={userName} onChange={onNameHandler}/>
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
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
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

export default RegisterPage2