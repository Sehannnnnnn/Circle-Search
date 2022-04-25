import React,{useState, useEffect} from 'react'
import {Box, Divider, Stack, Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height: 100,
    paddingLeft: 40
    }));

function CircleUnionPage() {
    const navigate = useNavigate();
    const [circleList, setcircleList] = useState([]);
    const [interests, setinterests] = useState([]);
    const [regions, setregions] = useState([]);
    const [Checked, setChecked] = useState({
        interest : "",
        region : ""
    })


    const onRegionHandler = (event) => {
            setChecked({...Checked, region : event.currentTarget.value});
    }
    
    const onInterestHandler = (event) => {
        setChecked({...Checked, interest : event.currentTarget.value});
    }

    function fetchCircles() {
        axios.get('circle/uni', {params : {interest: Checked.interest, region: Checked.region}})
        .then((response) => setcircleList(response.data))
        .catch((err) => {console.log(err)});
    }

    useEffect(() => {
      axios.get('/user/register2/interest').then((response) => {
        response.data.forEach((element) => setinterests((prevList) => [...prevList, element.interest]))
      });
      axios.get('user/register3/getRegionList').then((response) => {
          setregions(response.data);
      });
      fetchCircles();
    }, [])

    useEffect(() => {
        fetchCircles();
    }, [Checked])

    useEffect(() => {
        console.log(circleList);
    }, [circleList])

    const onlistClickHandler = (url) => {
        navigate(`../Circle/${url}`, {replace: true})
    }

  return (
    <div>
        <center><h2>연합동아리 둘러보기</h2>
        <Box sx={{
            border: '1px solid grey',
            borderRadius: 2,
            pb: 3,
            mt: 2
        }}>
            <FormControl sx={{pl: 3, pr: 3}}>
            <h3>관심 분야</h3>
            <Divider></Divider>
            <RadioGroup row
            sx={{p : 4}}>
                {interests.map((interest) => (
                    <FormControlLabel control={<Radio onChange={onInterestHandler} value={interest}/>} label={interest} color='success' sx={{mr: 3}}/>
                ))}
            </RadioGroup>
            <h3>활동 지역</h3>
            <Divider></Divider>
            <RadioGroup row
            sx={{p : 4}}>
                {regions.map((region) => (
                    <FormControlLabel control={<Radio onChange={onRegionHandler} value={region}/>} label={region} color='success' sx={{mr: 3}}/>
                ))}
            </RadioGroup>
            </FormControl>
        </Box>
        <Box sx={{
            border: '1px solid grey',
            borderRadius: 2,
            pb: 3,
            mt: 2}}>
                <Stack spacing={2}>
                {circleList.map((circle) => (
                        <Item onClick={() => onlistClickHandler(circle.url)} >
                            <Grid container spacing={1}>
                                <Grid item xs={2}>{circle.circle_name}</Grid>
                                <Grid item xs={6}>{circle.purpose}</Grid>
                            </Grid>
                        </Item>
                    ))}
                </Stack>
        </Box>
        </center>
    </div>
  )
}

export default CircleUnionPage