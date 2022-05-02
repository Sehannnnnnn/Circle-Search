import axios from 'axios';
import React,{useEffect, useState} from 'react'
import {Box} from '@mui/material'

function CircleInSchoolPage(props) {
  const userID = sessionStorage.getItem("userID");
  const isLogined = sessionStorage.getItem("islogined");
  //userSchool 받아오기
  useEffect(() => {

  }, [])
  
  //userSchool 받아오면 화면 표시 할 것.
if(isLogined === 'true') {
  return (
    <div>
      <h2>내 학교 동아리 소식</h2>
    </div>
  )
} else {
  return (<div>
            <h2>🏫 내 학교 동아리 소식</h2>
            <Box sx={{width: '100%', height: 200, bgcolor: '#F2F2F2', textAlign: 'center', lineHeight: 13}}>로그인 이후 이용 가능합니다.
            </Box>
            </div>)
}
  
}

export default CircleInSchoolPage