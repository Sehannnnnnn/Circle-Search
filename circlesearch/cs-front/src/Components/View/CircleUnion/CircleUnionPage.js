import React,{useState} from 'react'
import {Box, Divider} from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CircleUnionList from './CircleUnionList';
function CircleUnionPage() {
    const [interestState_Study, setinterestState_Study] = useState([
        {label :'인문사회', checked: false},
        {label :'공학/자연', checked : false},
        {label :'IT/경영', checked : false},
        {label :'취업', checked : false},
        {label :'어학', checked: false},
        {label :'공모전/스터디', checked: false},
        {label :'창업/스타트업', checked: false},
    ])
    const [interestState_Play, setinterestState_Play] = useState([
        {label :'문화/예술', checked: false},
        {label :'공연/음악', checked: false},
        {label :'여가/운동', checked: false},
        {label :'봉사', checked: false},
        {label :'여행', checked: false},
        {label :'종교', checked: false}
    ])
    const [CheckedCategory, setCheckedCategory] = useState("")

    const onChangeHandler = (event) => {
        setCheckedCategory(event.target.value)
        console.log(CheckedCategory)
    }

  return (
    <div>
        <center><h2>연합동아리 둘러보기</h2>
        <Box sx={{
            border: '1px solid grey',
            borderRadius: 2,
            pb: 3,
            mt: 2
        }}>
            <FormControl>
            <h3>학술</h3>
            <Divider></Divider>
            <RadioGroup row
            value={CheckedCategory}
            onChange={onChangeHandler}>
                {interestState_Study.map((category) => (
                    <FormControlLabel value={category.label} control={<Radio />} label={category.label} color='success'/>
                ))}
            </RadioGroup>
            <h3>취미</h3>
            <Divider></Divider>
            <RadioGroup row
            value={CheckedCategory}
            onChange={onChangeHandler}>
                {interestState_Play.map((category) => (
                    <FormControlLabel value={category.label} control={<Radio />} label={category.label} color='success'/>
                ))}
            </RadioGroup>
            </FormControl>
        </Box>
        <Box sx={{
            border: '1px solid grey',
            borderRadius: 2,
            pb: 3,
            mt: 2}}>
                <CircleUnionList></CircleUnionList>
        </Box>
        </center>
    </div>
  )
}

export default CircleUnionPage