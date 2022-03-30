import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import {Box, Divider, Button} from "@mui/material"
import imgA from '../../../static/img/111.png'

function CircleUnion() {
    const param = useParams();
    const CircleID = param.CircleID;
    const Page = param.Page;
    
    // useEffect(() => {
    //   axios.get(`/Circle/getCirclebyid/?id=${CircleID}`).then(
    //     //set을 하게함
    //   )
    // }, [])
    const circleInfo = {
        id : 1,
        name : 'YAPP',
        region : '서울',
        logo : '111',
        description : '작은 아이디어로 세상을 변화시키는 IT 기업형 동아리 YAPP',
        contents : '븗ㅂㄹㄹㅂㄹㄹㅂㄹㅂㄹㅂㄹㅂㄹ밟라ㅓ럴(API 연결필요)',
        link : 'https://www.yapp.co.kr/'
    }

    const onClickHandler = () => {
        let link = circleInfo.link;
        window.location.href = link;       //웹개발할때 숨쉬듯이 작성할 코드
        window.location.replace(link);     // 이전 페이지로 못돌아감
        window.open(link);  
    }
  return (
    <div>
        <Box sx={{
                        marginTop: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        bgcolor: 'white',
                        borderRadius: 4,
                        borderColor: 'grey.500',  
                        padding: 4
                    }}>
            <h1>{circleInfo.name}</h1>
            <Divider></Divider>
            <h2>{circleInfo.description}</h2>         
            <img src={imgA}></img>
            <div>{circleInfo.contents}</div>
            <br></br>
            <Button onClick={onClickHandler}>공식 링크로 바로가기</Button>
        </Box>
        
    </div>
  )
}

export default CircleUnion