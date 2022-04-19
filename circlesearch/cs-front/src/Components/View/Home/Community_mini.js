import React, {useState} from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {Box, Divider, Grid} from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Community_mini(props) {
    const [board, setboard] = useState({
            id: props.id,
            title: props.title.substr(0,20),
            writer: props.writer,
            contents: props.contents.substr(0,100),
            watches: props.watches
    })
  return (
    <div>
        <Box sx={{
            bgcolor : '#f0f7ed',
            borderBottom: '1px solid grey',
            p : 1,
            pl: 5,
        }}> <Grid container>
                <Grid item xs={10} sx={{
                    pl: 2
                }}><h3>{board.title}</h3></Grid>
                <Grid item xs={2}><h4><RemoveRedEyeIcon fontSize='small'/>&nbsp;{board.watches}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ThumbUpIcon fontSize='small'/>&nbsp;54</h4></Grid>
                <Grid item xs={12}>
                    <Divider></Divider>
                </Grid>
                <Grid item xs={12} >
                <p>{board.contents}</p>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default Community_mini