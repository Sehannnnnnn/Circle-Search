import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Container, FormGroup, FormControlLabel, Button, Divider, Grid, Checkbox} from '@mui/material';
import { Box } from '@mui/system';
import { useParams, useNavigate } from 'react-router-dom'


function RegisterPage2() {
  const params = useParams()
  const navigate = useNavigate()
  const [interestList, setinterestList] = useState([])
  const [interestState, setinterestState] = useState({
    '인문사회' : false,
    '공학/자연' : false,
    'IT/경영' : false,
    '취업' : false,
    '어학': false,
    '공모전/스터디': false,
    '창업/스타트업': false,
    '문화/예술': false,
    '공연/음악': false,
    '여가/운동': false,
    '봉사': false,
    '여행': false,
    '종교': false
  })

  useEffect(() => {
    axios.get("/user/register2/interest").then((response) => {
      setinterestList(response.data)
    })
  }, [])

  const checkInterestState = (object) => {
    let trueList = []
    for (var key in object) {
      if (object[key] === true) {
        trueList.push(key)
      } else continue
    }
    if (trueList.length == 2) {
      return trueList
    } else return false
    }
  
  const handleChange = (event) => {
    setinterestState({
      ...interestState,
      [event.target.name]: event.target.checked,
    });
    checkInterestState(interestState)
  };
  
  
  //interestState 생성

  var i = interestList.length;
  console.log(i)
  console.log('이거',interestState)
  console.log(checkInterestState(interestState))
  console.log(params)

  
  const onSubmitHandler = (event) => {
    event.preventDefault()
    let interest = checkInterestState(interestState)
    if (checkInterestState(interestState)) {
      let body = {
        userID : params.userID,
        interest1 : interest[0],
        interest2 : interest[1],
      }
      axios.post('/user/register2/interest',body).then((response) => {if(response.status == 200)
      navigate(`../register3/${params.userID}`, {replace: true})
      console.log(response.data);
    }).catch((err) => console.log(err))
    } else alert('두개만 골라주세요!')
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
            <p>환영합니다!<br></br>당신의 관심사 2가지를 선택해주세요. 서클서치가 당신에게 맞는 동아리를 찾아드립니다.</p>
            <Box component="form" onSubmit={onSubmitHandler} sx={{maxwith: 'sm'}}>
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
              </Box>
                <Divider sx={{marginTop: 5, marginBottom: 5}}></Divider>
            </Box>
    </Container>    
    </div>
  )
}

export default RegisterPage2