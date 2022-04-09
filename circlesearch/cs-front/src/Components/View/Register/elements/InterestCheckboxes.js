import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Grid, FormControlLabel, Checkbox, Divider, FormGroup, FormLabel, FormControl} from '@mui/material'

function InterestCheckboxes({onInterestHandler}) {
    const [InterestList, setInterestList] = useState([])
    const [InterestChecked, setInterestChecked] = useState({})
    useEffect(() => {
      axios.get("/user/register2/interest").then((response) => {
          response.data.forEach((element) => setInterestList((prevList) => [...prevList, element.categoryS]))
      }).then(setInterestChecked(() => InterestList.map((i) => false)))
    }, [])
    
    const handleChange = (event) => {
        setInterestChecked({
            ...InterestChecked, 
            [event.target.name] : event.target.checked,
        })
        onInterestHandler(InterestChecked);
    }

    
  return (
      <div>
    <FormControl variant="standard">
      <FormLabel><h3>동아리의 활동 분류(관심사)를 체크해주세요.</h3></FormLabel>
        <FormGroup>
              <Grid container spacing={3}>
                {InterestList.map((item) => (
                  <Grid item xs={5}>
                  <FormControlLabel control={
                    <Checkbox checked={InterestChecked[item]} onChange={handleChange} name={item}/>
                  } label={item}/>
                  </Grid>
                ))}
                <Grid item xs = {12}><Divider></Divider></Grid>
              </Grid>
    </FormGroup>
    </FormControl>
    </div>
  )
}

export default InterestCheckboxes