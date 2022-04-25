import React,{useState, useEffect} from 'react'
import {Box, Divider} from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CircleUnionList from './CircleUnionList';
import axios from 'axios';

function CircleUnionPage() {
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

    useEffect(() => {
      axios.get('/user/register2/interest').then((response) => {
        response.data.forEach((element) => setinterests((prevList) => [...prevList, element.interest]))
      });
      axios.get('user/register3/getRegionList').then((response) => {
          setregions(response.data);
      });
    }, [])
    
    useEffect(() => {
        console.log(Checked)
    }, [Checked])

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
                <CircleUnionList></CircleUnionList>
        </Box>
        </center>
    </div>
  )
}

export default CircleUnionPage