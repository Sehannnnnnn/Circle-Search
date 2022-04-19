import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, FormGroup, FormControlLabel, Button, Divider, Grid, Checkbox} from '@mui/material';
import { Box } from '@mui/system';
import { useParams, useNavigate } from 'react-router-dom'
import InterestCheckboxes from './elements/InterestCheckboxes';


function RegisterPage2() {
  const params = useParams()
  const navigate = useNavigate()
  const [interest, setinterest] = useState([])

  const interestHandler = (newInterest) => {
    setinterest(newInterest);
  }  

  useEffect(() => {
    console.log(interest);
  }, [interest])
  
  
  const onSubmitHandler = (event) => {
    if (interest.length == 2){
    event.preventDefault();
    console.log(interest)
      let body = {
        user_ID : params.userID,
        user_interest1 : interest[0],
        user_interest2 : interest[1],
      }
      axios.post('/user/register2/interest',body).then((response) => {if(response.status == 200)
      navigate(`../register3/${params.userID}`, {replace: true})
    }).catch((err) => console.log(err))
    } else alert('두개만 골라주세요!');
  }



  return (
    <div>
      <Container component="main" maxWidth="sm">
        <Box
            sx={{
                display: 'flex',
                maxWidth: 'sm',
                flexDirection: 'column', 
                padding: 5
            }}>
            <h2>서클서치 회원가입</h2>
            <Divider></Divider>
            <h3>관심사 등록</h3>
            <p>환영합니다!<br></br>당신의 관심사 2가지를 선택해주세요. 서클서치가 당신에게 맞는 동아리를 찾아드립니다.</p>
            <Box component="form" onSubmit={onSubmitHandler} sx={{maxwith: 'sm'}}>
              <InterestCheckboxes onInterestHandler={interestHandler}/>
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
              </Box>
                <Divider sx={{marginTop: 5, marginBottom: 5}}></Divider>
            </Box>
    </Container>    
    </div>
  )
}


export default RegisterPage2