import axios from 'axios';
import React,{useState} from 'react'
import {Stack, Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function CircleUnionList() {
    const [interest1Circle, setinterest1Circle] = useState([
        {id : 1,
        name : 'SOPT',
        logo : 'logo',
        img : 'img',
        detail: '이 동아리에 대한 설명'}
        , {id : 2,
        name : '큐시즘',
        logo : 'logo',
        img : 'img',
        detail: '이 동아리에 대한 설명'}
        ,{id : 3,
        name : '앙기못',
        logo : 'logo',
        img : 'img',
        detail: '이 동아리에 대한 설명'}
        , {id : 4,
        name : '경영시켜',
        logo : 'logo',
        img : 'img',
        detail: '이 동아리에 대한 설명'}
        , {id : 5,
        name : '경영시켜',
        logo : 'logo',
        img : 'img',
        detail: '이 동아리에 대한 설명'} 
        , {id : 6,
        name : '경영시켜',
        logo : 'logo',
        img : 'img',
        detail: '이 동아리에 대한 설명'} 
        , {id : 7,
        name : '경영시켜',
        logo : 'logo',
        img : 'img',
        detail: '이 동아리에 대한 설명'} 
        , {id : 8,
        name : '경영시켜',
        logo : 'logo',
        img : 'img',
        detail: '이 동아리에 대한 설명'} 
        , {id : 9,
        name : '경영시켜',
        logo : 'logo',
        img : 'img',
        detail: '이 동아리에 대한 설명'}
        , {id : 10,
            name : '경영시켜',
            logo : 'logo',
            img : 'img',
            detail: '이 동아리에 대한 설명'} 
    ]);

        // 흥미 서클 가져오는 api 개발 필요
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
    

    const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height: 100,
    paddingLeft: 40
    }));
  return (
    <div>
        <Stack spacing={2}>
        {interest1Circle.map((circle) => (
                <Item>
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