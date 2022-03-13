import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, FormGroup, FormControlLabel, Button, Divider, Grid, Checkbox} from '@mui/material';
import { Box } from '@mui/system';
import { AddCard, Check, ConstructionOutlined } from '@mui/icons-material';

function RegisterPage2() {
  const [interestList, setinterestList] = useState([])
  const [interestState, setinterestState] = useState({})

  useEffect(() => {
    axios.get("/user/register2/interest").then((response) => {
      setinterestList(response.data)
      response.data.forEach((element) => {
        setinterestState(interestState[element.categoryS]=false)})
        console.log(interestState)
    })
  }, [])

  const handleChange = (event) => {
    setinterestState({
      ...interestState,
      [event.target.name]: event.target.checked,
    });
  };
  

  //interestState 생성

  var i = interestList.length;
  console.log(i)
  console.log('이거',interestState)
  
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
            <h3>관심사 등록</h3>
            <FormGroup>
            <Grid container spacing={3}>
              {Array.from({length : i}).map((_, idx) => (
                <Grid item xs={5}>
                 <FormControlLabel control={
                  <Checkbox checked={interestState[interestList[idx].categoryS]} onChange={handleChange} name={interestList[idx].categoryS}/>
                } label={interestList[idx].categoryS}/>
                </Grid>
              ))}
              <Grid item xs = {12}><Divider></Divider></Grid>
            </Grid>
            </FormGroup>
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
    </Container>    
    </div>
  )
}

export default RegisterPage2