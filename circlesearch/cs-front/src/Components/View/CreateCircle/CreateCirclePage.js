import React, {useState, useEffect} from 'react';
import { Container, Divider, Grid, TextField, Button, Checkbox,  FormControlLabel, FormLabel, FormControl} from '@mui/material';
import {Box} from '@mui/system';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import axios from 'axios';
import RegisterPage2 from '../Register/RegisterPage2';
import InterestCheckboxes from '../Register/elements/InterestCheckboxes';


function CreateCirclePage() {
    const [circleState, setcircleState] = useState("");
    
    const onClickStateHandler = (event) => {
        setcircleState(event.currentTarget.value);
    }

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
                    <h2>새로운 동아리 생성</h2>
                    <p>서클서치에 동아리를 등록하고 새로운 여정을 시작해주세요!</p>
                    <Divider></Divider>
                    <h3>동아리 구분 선택</h3>
                    <Grid container spacing={1}>
                        <Grid item xs = {6}>
                            <Button fullWidth variant={circleState == "연합" ? 'contained' : 'outlined'} color='success' sx={{
                                height: 100,
                                fontSize: 'large',
                            }} endIcon={<GroupsIcon/>} onClick={onClickStateHandler} value="연합">연합 동아리 </Button>
                        </Grid>
                        <Grid item xs = {6}>
                        <Button fullWidth variant={circleState == "교내" ? 'contained' : 'outlined'} color='success'sx={{
                                height: 100,
                                fontSize: 'large',
                            }} endIcon={<SchoolIcon/>} onClick={onClickStateHandler} value="교내">교내 동아리 </Button>
                        </Grid>
                    </Grid>
                    <Divider sx={{mt: 5}}></Divider>
                    {circleState == "" ? null : circleState == "연합" ? <CreateCircleUnion/> : <CreateCircleSchool/>}
                </Box>
            </Container>
        </div>
      )
    }

export default CreateCirclePage



function CreateCircleUnion() {
    const [region, setregion] = useState({
        수도권 : false,
        호남 : false,
        영남: false,
        영동: false,
    })
    const handleChange = (event) => {
        setregion({
            ...region, 
            [event.target.name] : event.target.checked,
        })
    }
    const {수도권, 호남, 영남, 영동} = region;
    const [interest, setinterest] = useState({})
    const interestHandler = (newInterest) => {
        setinterest({newInterest})
    }
  return (
    <div>
        <FormControl variant="standard">
            <FormLabel><h3>연합동아리의 활동 지역을 설정해 주세요.</h3></FormLabel>
            <FormControlLabel control={
                <Checkbox checked={수도권} onChange={handleChange} name={"수도권"}/>} label={"수도권"}/>
            <FormControlLabel control={
                <Checkbox checked={호남} onChange={handleChange} name={"호남"}/>} label={"호남"}/>
            <FormControlLabel control={
                <Checkbox checked={영남} onChange={handleChange} name={"영남"}/>} label={"영남"}/>
            <FormControlLabel control={
                <Checkbox checked={영동} onChange={handleChange} name={"영동"}/>} label={"영동"}/>
        </FormControl>
        <Divider sx={{
            mt: 3
        }}></Divider>
        <InterestCheckboxes onInterestHandler={interestHandler}/>
        <Grid xs={12}>
        <Button variant="contained" fullWidth color="success" sx={{
            height: 50
        }}>다음단계 진행하기</Button>
        </Grid>
    </div>
  )
}

function CreateCircleSchool() {
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
    //   const handleChange = (event) => {
    //     setinterestState({
    //       ...interestState,
    //       [event.target.name]: event.target.checked,
    //     });
    //     checkInterestState(interestState)
    //   }; 

    return (
      <div>
          
      </div>
    )
}



function CreateCircleName () {
    const [circle, setcircle] = useState({
        name : "",
    });

    const onCircleNameHandler = (event) => {
        setcircle({name : event.currentTarget.value})
        console.log(circle)
    }

    //동아리명 체크
    const validateCircleName = () => {
        return false;
    }
    return (
        <div>
            <Grid container rowspacing={1}>
                <h3>동아리 정보 입력</h3>
                        <Grid item xs={12} sx={{mb:1}}>
                        <TextField required margin="normal" label="동아리 명" variant="filled" fullWidth value={circle.name} color='success'
                                error={validateCircleName()} onChange={onCircleNameHandler} helperText ={validateCircleName()? "": "사용할 수 있는 동아리 명입니다."}/>
                        </Grid>
                </Grid>
        </div>
    )
} 