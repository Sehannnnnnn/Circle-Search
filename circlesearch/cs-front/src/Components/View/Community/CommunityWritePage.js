import { borderRadius } from '@mui/system';
import React, {useState} from 'react';
import {Box, TextField, Grid, Button} from '@mui/material';

function CommunityWritePage() {
    const [userID, setuserID] = useState("K");
    const [Board, setBoard] = useState({
        title : "",
        writer : userID,
        contents : "",
        time : undefined,
        pirctureURL : "",
    })

    const onTitleHandler = (event) => {
        setBoard({
            ...Board,
            title : event.target.value
        })
    }

    const onContentsHandler = (event) => {
        setBoard({
            ...Board,
            contents : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        let time = new Date();
        setBoard({
            ...Board,
            time : time
        })
    }
      return (
    <div>
        <Box component="form" onSubmit={onSubmitHandler} sx={{
            mt : 2,
            border : "1px solid gray",
            borderRadius: 1,
            p : 3
        }}>
            <h2>글 작성</h2>
            <Grid container spacing = {3}>
                <Grid item xs={12} sx={{mb: 2}}>
                    <TextField required label="글 제목" fullWidth value={Board.title} onChange={onTitleHandler}/>
                </Grid>
                <Grid item xs={12} sx={{mb: 2}}>
                    <TextField disabled label="userID" fullWidth value={userID}/>
                </Grid>
                <Grid item xs={12} sx={{mb: 2}}>
                    <TextField multiline rows={10} label="글 내용" fullWidth value={Board.contents} onChange={onContentsHandler}/>
                </Grid>
            </Grid>
            <Button variant="contained" color="success" type='submit' sx={{mt: 1, mb: 3, width : 100}}> 제출하기 </Button>
        </Box>
        
    </div>
  )
}

export default CommunityWritePage