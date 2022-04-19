import axios from 'axios';
import React,{useEffect, useState} from 'react'

function CircleInSchoolPage() {
  const [userID, setuserID] = useState(sessionStorage.getItem("userID"));
  const [userSchool, setuserSchool] = useState("")

  //userSchool 받아오기
  useEffect(() => {
  }, [userID])
  
  //userSchool 받아오면 화면 표시 할 것.

  return (
    <div>
      <h1>준비중입니다....</h1>
    </div>
  )
}

export default CircleInSchoolPage