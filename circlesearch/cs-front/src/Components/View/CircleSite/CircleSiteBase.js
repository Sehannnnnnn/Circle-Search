import { Container, Grid, Stack, Divider, Avatar, Button, Box } from '@mui/material'
import { width } from '@mui/system'
import React, {useState, useEffect} from 'react'
import imgA from '../../../static/img/222.png'
import Community_modal from '../Home/Community_modal'
import imgB from '../../../static/img/bbb.jpeg'
import CircleInterest_mini from '../Home/CircleInterest_mini'
import {useParams} from 'react-router-dom'

function CircleSiteBase() {
    // param에 따라 circleInfo 가져오기
    const params = useParams();
    const [Circle, setCircle] = useState(params.CircleID);
    
    

const [circleInfo, setcircleInfo] = useState({
    Name:"DDC",
    Type: "연합",
    Manager: "micke2",
    Region:["서울"],
    School:"",
    Interest: ["IT/경영"],
    Purpose:"서울권 개발자 연합 동아리 입니다.",
})

const [Gallery, setGallery] = useState([
    {id : 1, name: '게시물1', img: 'img', logo: 'logo'},
    {id : 2, name: '게시물2', img: 'img', logo: 'logo'},
    {id : 3, name: '게시물3', img: 'img', logo: 'logo'},
    {id : 4, name: '게시물4', img: 'img', logo: 'logo'},
])

  return (
    <div>
        <Container maxWidth = "xl"
        sx = {
        		{
            height : '100%'
        }}>
            <Box sx={{display:'grid', gridAutoColumns: '1fr', gap: 2}} >
                <Box xs={{gridRow: '1', gridColumn: '1'}}>
                    <Stack spacing={3} sx={{mt: 5}}>
                            <Avatar alt="circleMainIMG" src={imgA} sx={{
                                width:'70%', height: '70%', m: '0 auto',
                            }}></Avatar>
                            <h2>{circleInfo.Name}</h2>
                            <Divider></Divider>
                            <ul style={{lineHeight: '140%', fontSize: 18}}>
                                <li>구분 : {circleInfo.Type}동아리</li>
                                <li>{circleInfo.Type == "연합" ? `지역 : ${circleInfo.Region.toString()}` : `학교 : ${circleInfo.School}`}</li>
                                <li>분야 : {circleInfo.Interest.toString()}</li>
                                <li>매니저 : {circleInfo.Manager}</li>
                            </ul>
                            <h3>동아리 소개글</h3>
                            <Box sx={{width: '100%', backgroundColor:'#F2F2F2', p: 2}}>{circleInfo.Purpose}</Box>
                            <Grid container columnGap={2}>
                                <Grid item xs={5}>
                                    <Button fullWidth variant='contained' color='success'>가입 신청</Button>
                                </Grid>
                                <Grid item xs={5}>
                                    <Button fullWidth variant='outlined' color='success'>관심 등록</Button>
                                </Grid>
                            </Grid>
                            <h3>가입 회원</h3>
                            <p>215 명</p>
                            <Box sx={{width: '100%', backgroundColor:'#F2F2F2', p: 2}}></Box>
                    </Stack>
                </Box>
                <Divider orientation="vertical" flexItem style={{marginLeft: 30}} ></Divider>
                <Box sx={{gridRow: '1', gridColumn: '2/5', borderLeft: 'solid 1px grey'}}>
                    <Box
                    component="img"
                    sx={{height : 150, width: '100%'}} src={imgB}></Box>
                    <Box sx={{ml: 4}}>
                    <h2>갤러리</h2>
                    <Grid container spacing ={2}>
                    {Gallery.map((galley)=>(
                        <Grid item xs = {6}>
                        <CircleInterest_mini id={galley.id} name={galley.name} img={galley.img} logo={galley.logo}/>
                        </Grid>
                    ))
                    }
                </Grid>
                    <h2>최근 게시물</h2>
                    <Community_modal/>
                    </Box>
                </Box>
            </Box>
        </Container>
    </div>
  )
}

export default CircleSiteBase