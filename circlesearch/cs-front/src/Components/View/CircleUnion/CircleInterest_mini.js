import React,{useState} from 'react'
import {Box, Grid} from '@mui/material'

function CircleInterest_mini(props) {
    const [CircleInfo, setCircleInfo] = useState({
        id : props.id,
        name : props.name,
        logo : props.logo,
        img : props.img
    })
  return (
    <div>
        <Box sx={{
             height: 250,
             border: '1px solid grey'
        }}>
            <div>   {CircleInfo.id}</div>
            <center>
                <Grid container coloumspacing={1}>
                <Grid item xs={12} sx={{
                    height: 200,
                    border: '1px solid grey'
                }}>
                    {CircleInfo.img}
                </Grid>
                <Grid item xs={3}>
                    {CircleInfo.logo}
                </Grid>
                <Grid item xs={8}>
                    {CircleInfo.name}
                </Grid>
            </Grid>
            </center>
        </Box>
    </div>
  )
}

export default CircleInterest_mini