import axios from 'axios';
import React,{useState, useEffect} from 'react'
import {Stack, Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

function CircleUnionList() {
    const [interest1Circle, setinterest1Circle] = useState([ ]);
    
    //userInterest별 동아리 조회 기능 필요
    // useEffect(() => {
    //   const getInterestCircle = async() => {
    //       try {
    //           axios.get('/main/InterestCircle', userInterests).then((res) => setinterest1Circle(res.data.circle1))
    //       } catch (error) {
    //           console.error(error.message);
    //       }
    //   }
    //   getInterestCircle();
    // }, [])
    
    const navigate = useNavigate();
    const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height: 100,
    paddingLeft: 40
    }));

    const onlistClickHandler = (event) => {
        let param = event.target.id;
        navigate(`../Circle/Union/${param}/main`, {replace: true})
    }
  return (
    <div>
        <Stack spacing={2}>
        {interest1Circle.map((circle) => (
                <Item onClick={onlistClickHandler} id={circle.id}>
                    <Grid container spacing={1}>
                        <Grid item xs={1}>{circle.id}</Grid>
                        <Grid item xs={2}>{circle.logo}</Grid>
                        <Grid item xs={2}>{circle.name}</Grid>
                        <Grid item xs={6}>{circle.detail}</Grid>
                    </Grid>
                </Item>
            ))}
        </Stack>
    </div>
  )
}

export default CircleUnionList