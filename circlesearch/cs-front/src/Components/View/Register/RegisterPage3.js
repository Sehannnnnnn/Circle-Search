import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, TextField, Button, Divider, Grid, MenuItem, Select, Autocomplete} from '@mui/material';
import { Box } from '@mui/system';

function RegisterPage3() {
  const params = useParams();
  const navigate = useNavigate();
  const [userNickname, setuserNickname] = useState("");
  const [checkuserNickname, setcheckuserNickname] = useState()
  const [userID, setuserID] = useState(params.userID);
  const [userCollege, setuserCollege] = useState("");
  const [userMajor, setuserMajor] = useState("");
  const [userRegion, setuserRegion] = useState("");
  const [collegeList, setcollegeList] = useState([
    {label: '서울과학기술대학교', id:1},
    {label: '서울여자대학교', id:2},
    {label: '건국대학교', id:3},
    {label: '고려대학교', id:4}
  ])
  const [regionList, setregionList] = useState([
    {label: '서울', id:1},
    {label: '경기', id:2},
    {label: '대전/광주', id:3},
    {label: '대구/부산', id:4}
  ])

  //CollegeList, RegionList 가져오기
  useEffect(() => {
    const getCollegeList = async () =>{
      try {
        axios.get('/user/register3/getCollegeList').then((response) => {setcollegeList(() => response.data)})
      } catch (error) {
        console.error(error.message);
      };
    }
    const getRegionList = async() => {
      try {
        axios.get('/user/register3/getRegionList').then((response) => {setregionList(() => response.data)})
      } catch (error) {
        console.error(error.message);
      };
    }
    getCollegeList();
    getRegionList();
  }, []);

  const onNicknameHandler = (event) => {
        setuserNickname(event.currentTarget.value);
      } 
  
  const onCheckNicknameHandler = (event) => {
      event.preventDefault()
      axios.get('/user/register3/checkNickname', {params : {userNickname: userNickname}}).then((response) => {
          if (response.data > 0) {
              alert("중복된 닉네임입니다!")
              setcheckuserNickname(false)
              return false
          } else {
              alert("사용할 수 있는 닉네임입니다.")
              setcheckuserNickname(true);
              return true
          }
      })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    let body = {
      user_id : userID,
      user_nickname : userNickname,
      user_college : userCollege,
      user_region : userRegion,
    }
    console.log(body)
    axios.post('/user/register3', body).then((response) => {
      console.log(response.status)
      navigate('/register/complete', {replace: true});
    }).catch((err) => console.log(err))
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
            <h3>세부 정보</h3>
            <Box component="form" onSubmit={onSubmitHandler} sx={{maxwith: 'sm'}}>
                <Grid container rowspacing={2}>
                <Grid item xs={12} >
                        닉네임
                </Grid>
                  <Grid item xs={12}>
                  <TextField required margin="normal" id="outlined-required" label="닉네임" fullWidth value={userNickname} onChange={onNicknameHandler} error={false === checkuserNickname} helperText={false === checkuserNickname ? "닉네임이 중복되었습니다": "닉네임을 입력해주세요 - 2자이상"}/>
                  </Grid>
                  <Grid item xs={12} sx={{mb: 1}}>
                        <Button variant={checkuserNickname ? "contained":"outlined"} onClick={onCheckNicknameHandler} color='success'> 닉네임 중복체크</Button>
                  </Grid>
                  <Grid item xs={12} sx={{mb: 1}}>
                    대학교 명
                  </Grid>
                  <Grid item xs={12} sx={{mb: 1}}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    value={userCollege}
                    onChange={(event, newvalue) => {
                      setuserCollege(newvalue);
                    }}
                    options={collegeList}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="대학" />}
                  />
                  </Grid>
                  <Grid item xs={12} sx={{mb: 1}}>
                      활동지역
                  </Grid>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={regionList}
                    value={userRegion}
                    onChange={(event, newvalue) => {
                      setuserRegion(newvalue);
                    }}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="지역" />}
                  />
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
                    회원가입 완료
                    </Button> 
                <Divider sx={{marginTop: 5, marginBottom: 5}}></Divider>
            </Box>
        </Box>
    </Container>    
    </div>
  )
}

export default RegisterPage3