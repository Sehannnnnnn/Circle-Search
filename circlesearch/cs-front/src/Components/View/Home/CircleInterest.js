import React, {useState, useEffect} from 'react'
import {Divider, Grid, Button} from '@mui/material'
import CircleInterest_mini from './CircleInterest_mini';
import axios from 'axios';

function CircleInterest() {
    const [userID, setuserID] = useState("");
    const [userInterests, setuserInterests] = useState({
        interest1 : "IT/경영",
        interest2 : "공연/예술",
    })
    const [interest1Circle, setinterest1Circle] = useState([
        {id : 1,
            name : 'SOPT',
            logo : 'logo',
            img : 'img'}
        , {id : 2,
            name : '큐시즘',
            logo : 'logo',
            img : 'img'}
        ,{id : 3,
            name : '앙기못',
            logo : 'logo',
            img : 'img'}
        , {id : 4,
            name : '경영시켜',
            logo : 'logo',
            img : 'img'}  
    ]);

    const [interest2Circle, setinterest2Circle] = useState([
        {id : 1,
            name : '개망나니',
            logo : 'logo',
            img : 'img'}
        , {id : 2,
            name : '신들림',
            logo : 'logo',
            img : 'img'}
        ,{id : 3,
            name : '둠피스트',
            logo : 'logo',
            img : 'img'}
        , {id : 4,
            name : '맥',
            logo : 'logo',
            img : 'img'}  
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
    

  return (
    <div>
        <h2>내 관심 동아리 소식</h2>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <h3>{userInterests.interest1}</h3>
                <Grid container spacing ={2}>
                    {interest1Circle.map((circle)=>(
                        <Grid item xs = {6}>
                        <CircleInterest_mini id={circle.id} name={circle.name} img={circle.img} logo={circle.logo}/>
                        </Grid>
                    ))
                    }
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <h3>{userInterests.interest2}</h3>
                <Grid container spacing ={2}>
                {interest2Circle.map((circle)=>(
                            <Grid item xs = {6}>
                            <CircleInterest_mini id={circle.id} name={circle.name} img={circle.img} logo={circle.logo}/>
                            </Grid>
                        ))
                        }
                </Grid>
            </Grid>
            <Grid item xs={6}>
                        <Button color="success">{userInterests.interest1} 동아리 더 보기</Button>
                        <br></br>
            </Grid>
            <Grid item xs={6}>
                        <Button color="success">{userInterests.interest2} 동아리 더 보기</Button>
                        <br></br>
            </Grid>
        </Grid>
    </div>
  )
}

export default CircleInterest