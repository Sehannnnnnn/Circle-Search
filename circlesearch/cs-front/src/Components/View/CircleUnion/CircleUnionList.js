// import axios from 'axios';
// import React,{useState, useEffect} from 'react'
// import {Stack, Grid} from '@mui/material'
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import { useNavigate } from 'react-router-dom';

// function CircleUnionList(props) {
//     const {circleList} = props;

//     const navigate = useNavigate();

//     const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     height: 100,
//     paddingLeft: 40
//     }));

//     const onlistClickHandler = (event) => {
//         navigate(`../Circle/${event.currentTarget.url}`, {replace: true})
//     }
  
//     if (circleList != undefined) {
//         return (
//             <div>
//                 <Stack spacing={2}>
//                 {circleList.map((circle) => (
//                         <Item onClick={onlistClickHandler} url={circle.url}>
//                             <Grid container spacing={1}>
//                                 <Grid item xs={2}>{circle.name}</Grid>
//                                 <Grid item xs={6}>{circle.purpose}</Grid>
//                             </Grid>
//                         </Item>
//                     ))}
//                 </Stack>
//             </div>
//         )
//     }else return (
//         <div>데이터를 가져오는중</div>
//     )
// }

// export default CircleUnionList