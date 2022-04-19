import React, {useState, useEffect} from 'react';
import { Container, Divider, Grid, TextField, Button, Checkbox,  FormControlLabel, FormLabel, FormControl, MenuItem, autocompleteClasses} from '@mui/material';
import {Box} from '@mui/system';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import axios from 'axios';
import InterestCheckboxes from '../Register/elements/InterestCheckboxes';
import CreateCircleFinModal from './CreateCircleFinModal';

function CreateCirclePage(props) {
    /*
        추가 구현 사항
        1. 동아리 주소에 대한 중복검사
        2. 학교 List에 대한 api로 가져오도록 컴포넌트 생성
    */
    const [circleState, setcircleState] = useState("");
    const [circleName, setcircleName] = useState("");
    const [circlePurpose, setcirclePurpose] = useState("");
    const [circleAddress, setcircleAddress] = useState("");
    const regExpId = /^[0-9a-zA-Z]{1,20}$/; //5~20자리 영문 숫자만 입력가능

    const onClickStateHandler = (event) => {
        setcircleState(event.currentTarget.value);
    }

    const onCircleNameHandler = (event) => {
        setcircleName(event.currentTarget.value);
    }

    const onCirclePurposeHandler = (event) => {
        setcirclePurpose(event.currentTarget.value);
    }

    const onCircleAddressHandler = (event) => {
        setcircleAddress(event.currentTarget.value);
    }

    const validateAddress = () => {
        if (circleAddress === "") return false;
        else return !regExpId.test(circleAddress);
    }
    return (
        <div>
            <Container component="main" maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    maxWidth: 'md',
                    flexDirection: 'column',
                    padding: 5,
                }}>
                    <h2>새로운 동아리 생성</h2>
                    <p>서클서치에 동아리를 등록하고 새로운 여정을 시작해주세요!</p>
                    <Divider></Divider>
                    <FormControl>
                    <FormLabel><h3>동아리 이름</h3></FormLabel>
                    <TextField required label="동아리 명" variant="standard" fullWidth value={circleName} color="success" onChange={onCircleNameHandler}></TextField>
                    </FormControl>
                    <FormControl>
                    <FormLabel><h4>매니저 계정 ID</h4></FormLabel>
                    <TextField disabled label="매니저" variant="standard" fullWidth value={sessionStorage.getItem("userID")} color="success"></TextField>
                    </FormControl>
                    <FormLabel><h4>동아리 주소</h4></FormLabel>
                    <Grid sx={{borderBottom: 'solid grey 1px', bgcolor: '#F2F2F2'}} container>
                        <Grid sx={{pt: 3}}>
                            <Box sx={{textAlign: 'right', fontSize: 'large', mr: 2, ml: 2}}>www.circlesearch.com/circle/</Box></Grid>
                        <Grid item xs={7} >
                        <TextField required label="동아리 주소" variant="standard" fullWidth value={circleAddress} color="success" error={validateAddress()} onChange={onCircleAddressHandler} helperText={validateAddress() ? "영어 또는 숫자로만 입력해주세요!" : ""}></TextField>
                        </Grid>
                    </Grid>
                    <FormControl>
                    <FormLabel><h4>동아리 설명</h4></FormLabel>
                    <TextField required label="동아리 설명" fullWidth multiline rows={5} value={circlePurpose} color="success" onChange={onCirclePurposeHandler}></TextField>
                    </FormControl>
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
                    {circleState == "" ? null : circleState == "연합" ? <CreateCircleUnion circleName={circleName} circlePurpose={circlePurpose} circleAddress={circleAddress}/> : <CreateCircleSchool circleName={circleName} circlePurpose={circlePurpose} circleAddress={circleAddress}/>}
                </Box>
            </Container>
        </div>
      )
    }

export default CreateCirclePage

function check1selected(arr) {
    if (arr.length != 1) {
        alert('분야 또는 지역을 하나씩만 선택해주세요!')
        return false;
    }
    else return true
}


//연합동아리 생성 폼
function CreateCircleUnion(props) {
    const {circleName, circlePurpose, circleAddress} = props;
    const [circleInfo, setcircleInfo] = useState({
        CircleType: "연합",
        CircleName: circleName,
        CircleAddress: circleAddress,
        CirclePurpose: circlePurpose,
        CircleInterest : [],
        CircleRegion : [],
    })
    const [region, setregion] = useState([]);
    const [regionList, setregionList] = useState([]);
    const [modalOpen, setmodalOpen] = useState(false);

    const regionhandleChange =(event) => {
        if (event.currentTarget.checked) {
        setregion((prev) => [
            ...prev, 
            event.target.name
        ])
        } else {
            const newArr = region.filter(reg => reg != event.currentTarget.name);
            setregion(newArr)
        }
    }
    const [interest, setinterest] = useState([])
    const interestHandler = (newInterest) => {
        setinterest(newInterest)
    }
    //RegionList 가져오기 API
    useEffect(() => {
      axios.get('/user/register3/getRegionList').then((res) => {
          setregionList(res.data);
      }).catch((err) => {console.log(err)})
    }, [])
    
    useEffect(() => {
        setcircleInfo((prev) => {
            return {...prev,
          CircleRegion : region}
        })
      }, [region])

    useEffect(() => {
        setcircleInfo((prev) => {
            return {...prev,
          CircleInterest : interest}
        })
      }, [interest])

    useEffect(()=> {
        console.log(circleInfo)
    }, [circleInfo])

    //연합 동아리 생성
    const sendNewCircleUnion = () => {
        if (check1selected(interest) && check1selected(region)) {
        let body = {
            region: circleInfo.CircleRegion[0],
            interest: circleInfo.CircleInterest[0],
            circle_name : circleInfo.CircleName,
            url : circleInfo.CircleAddress,
            id : sessionStorage.getItem("userID"),
            purpose : circleInfo.CirclePurpose
        }
        axios.post('/circle/register/UniCircle', body).then((res) => {
            if (res.data == 1) {setmodalOpen(true);}
            else {alert('오류발생');}
        });
        setmodalOpen(true)
    }
        //axios 통신 이후 생성 완료 창 생성
    }

    const handleModalClose = () => {
        setmodalOpen(false)
    }

  return (
    <div>
        <FormControl variant="standard">
            <FormLabel><h3>연합동아리의 활동 지역을 설정해 주세요.</h3></FormLabel>
            <Grid container spacing={1}>
            {regionList.map((item) => (
                <Grid item xs = {3}>
                    <FormControlLabel control = {
                        <Checkbox onChange={regionhandleChange} name={item}/>} label={item} key={item}/>
                </Grid>
            ))}
            </Grid>
        </FormControl>
        <Divider sx={{
            mt: 3
        }}></Divider>
        <InterestCheckboxes onInterestHandler={interestHandler}/>
        <Grid item xs={12}>
        <Button variant="contained" fullWidth color="success" onClick={sendNewCircleUnion} sx={{
            height: 50 
        }} >다음단계 진행하기</Button>
        </Grid>
        <CreateCircleFinModal open={modalOpen} onClose={handleModalClose} circleInfo={circleInfo}/>
    </div>
  )
}

//교내동아리 생성 폼
function CreateCircleSchool(props) {
    const {circleName, circlePurpose, circleAddress} = props;
    const [circleInfo, setcircleInfo] = useState({
        CircleType: "교내",
        CircleName: circleName,
        CircleAddress: circleAddress,
        CirclePurpose: circlePurpose,
        CircleInterest : [],
        CircleSchool : "",
    })

    const [interest, setinterest] = useState([])
    const interestHandler = (newInterest) => {
        setinterest(newInterest)
    }

    const [schoolName, setschoolName] = useState("")
    const [schoolNameList, setschoolNameList] = useState([]);

    const [modalOpen, setmodalOpen] = useState(false);
    const handleModalClose = () => {
        setmodalOpen(false)
    }

    const handleChange = (event) => {
        setschoolName(event.target.value);
    }

    //SchoolNameList 가져오기 API
    useEffect(() => {
       axios.get('/user/register3/getCollegeList').then((res) => {
           setschoolNameList(res.data);
       }).catch((err) => {console.log(err)});
    }, [])

    useEffect(() => {
      setcircleInfo((prev) => {
          return {...prev, 
            CircleSchool : schoolName}
        });
    }, [schoolName])
    
    useEffect(() => {
        setcircleInfo((prev) => {
            return {...prev, 
              CircleInterest : interest}
          });
      }, [interest])

    const sendNewCircleSchool = () => {
        if (check1selected(interest)) {
        let body = {
            college: circleInfo.CircleSchool,
            interest: circleInfo.CircleInterest[0],
            circle_name : circleInfo.CircleName,
            url : circleInfo.CircleAddress,
            id : sessionStorage.getItem("userID"),
            purpose : circleInfo.CirclePurpose,
        }
        axios.post('/circle/register/CoCircle', body).then((res) => {
            if (res.data == 1) {setmodalOpen(true);}
            else {alert('오류발생');}
        });
    }
    }

    
    return (
      <div>
          <Grid item xs={12}>
        <FormControl variant="standard">
            <FormLabel><h3>동아리의 소속 학교를 선택해주세요!</h3></FormLabel>
            <TextField
          select
          label="대학교 명"
          fullWidth
          value={schoolName}
          onChange={handleChange}
        >
          {schoolNameList.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        </FormControl>
        </Grid>
        <Divider sx={{
            mt: 3
        }}></Divider>
        <InterestCheckboxes onInterestHandler={interestHandler}/>
        <Grid item xs={12}>
        <Button variant="contained" fullWidth color="success" onClick={sendNewCircleSchool} sx={{
            height: 70
        }}>생성하기</Button>
        </Grid>
        <CreateCircleFinModal open={modalOpen} onClose={handleModalClose} circleInfo={circleInfo}/>
      </div>
    )
}
