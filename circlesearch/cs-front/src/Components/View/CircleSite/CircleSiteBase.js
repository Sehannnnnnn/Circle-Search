import { Container, Grid, Stack, Divider, Avatar, Button, Box } from '@mui/material'
import React, {useState, useEffect} from 'react'
import imgA from '../../../static/img/222.png'
import CommunityModal from '../Home/CommunityModal'
import imgB from '../../../static/img/bbb.jpeg'
import CircleInterestMini from '../Home/CircleInterestMini'
import {useParams} from 'react-router-dom'
import {INTEREST_CODE, REGION_CODE} from '../../../static/type_codes.js'
import axios from 'axios'
import { red } from '@mui/material/colors'

function CircleSiteBase() {
    // param에 따라 circleInfo 가져오기
    const params = useParams();
    const [circleState, setcircleState] = useState({});
    const [circleInfo, setcircleInfo] = useState({})
    const [circleCollege, setcircleCollege] = useState("");

    const [Gallery, setGallery] = useState([
        {id : 1, name: '게시물1', img: 'img', logo: 'logo'},
        {id : 2, name: '게시물2', img: 'img', logo: 'logo'},
        {id : 3, name: '게시물3', img: 'img', logo: 'logo'},
        {id : 4, name: '게시물4', img: 'img', logo: 'logo'},
    ])

    
    useEffect(() => {
        setcircleState({Type: params.UniCo, Url: params.circleUrl});
    }, [])
    
    useEffect(() => {
        if (circleState.Type === undefined) return;
        const REQUEST_URL = `/getCircle${circleState.Type}Info`;
        const fetchCircleInfo = async() => {
            axios.get(REQUEST_URL, {params : { url : circleState.Url}})
            .then((res) => setcircleInfo(res.data))
            .catch((err) => console.log(err));
        }
        fetchCircleInfo();
    }, [circleState])
    

    useEffect(() => {
        if(circleInfo.college_code === undefined) return;
        const getCollegeName = async() => {
            if (circleState.Type !== 'co') return;
            axios.get('/collegeName', {params : { college_code : circleInfo.college_code }}).
            then((res) => {
                setcircleCollege(res.data);
            })
        }
        getCollegeName();
    }, [circleInfo])
    
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
                            <Avatar alt="circleMainIMG" sx={{
                                width:200, height: 200, m: '0 auto',
                            }}></Avatar>
                            <h2>{circleInfo.circle_name}</h2>
                            <Divider></Divider>
                            <ul style={{lineHeight: '140%', fontSize: 18}}>
                            <li>{circleState.Type === "uni" ? `지역 : ${REGION_CODE[circleInfo.region_code]}` : `학교 : ${circleCollege}`}</li>
                                <li>{circleState.Type === 'uni' ? "연합" : "교내"}동아리</li>
                                <li>{INTEREST_CODE[circleInfo.interest_code]}</li>
                                <li>매니저 : {circleInfo.manager}</li>
                            </ul>
                            <h3>동아리 소개글</h3>
                            <Box sx={{width: '100%', backgroundColor:'#F2F2F2', p: 2}}>{circleInfo.purpose}</Box>
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
                        <CircleInterestMini id={galley.id} name={galley.name} img={galley.img} logo={galley.logo}/>
                        </Grid>
                    ))
                    }
                </Grid>
                    <h2>최근 게시물</h2>
                    <CommunityModal/>
                    </Box>
                </Box>
            </Box>
        </Container>
    </div>
  )
}

export default CircleSiteBase