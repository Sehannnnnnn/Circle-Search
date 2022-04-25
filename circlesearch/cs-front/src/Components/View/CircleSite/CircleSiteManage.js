import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function CircleSiteManage() {
    //매니저 Circle 관리 페이지
    const param = useParams();
    const [userID, setUserID] = useState(sessionStorage.getItem("userID"));
    const [circle, setcircle] = useState("");
    const [auth, setauth] = useState();

    useEffect(() => { 
      setcircle(param.circieID);
    }, [])

    //현재 사용자가 동아리의 매니저가 맞는지 확인
    //Api 현재 미구현
    useEffect(() => {
        axios.get('/Circle/getmaneger', {params : {circle_name : circle}}).then((res) => {setauth(userID == res.data)}).catch((err) => {console.log(err);})
    }, [circle])
    
    if (auth) {
        return (
            <div>CircleSiteManage</div>
          )
    } return (
        <div>접근 권한이 없습니다.</div>
    )
  
}

export default CircleSiteManage

function CircleApplicants() {
    //현재 동아리 지원자 list 형식으로 화면 표시
    return(
        <div>
            
        </div>
    )
}