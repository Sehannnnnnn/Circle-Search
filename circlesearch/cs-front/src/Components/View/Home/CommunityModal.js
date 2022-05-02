import React, {useState} from 'react'
import CommunityMini from './CommunityMini'
import {Grid} from '@mui/material'

function CommunityModal() {

  //커뮤니티 별 핫게시글 목록을 띄울 필요함 API
  const [commuBoardList, setcommuBoardList] = useState([
    {
      id: 1,
      title : '여기 보다 더 좋은 동아리 없었던거 같다.',
      writer : '하나둘',
      contents : '동아리란 동아리는 다해봤지만 너랑 나랑은 동아리 따져야지 원래 내꺼 아니냐, 이 경우엔 쇼당이 안붙지',
      watches : 121,
    }, {
      id: 2,
      title : '원예반도 있어? 감성 동아리네',
      writer : '또경영',
      contents : '너 금천동아리에 있었지, 오죽하면 내가 네 번호를 외우고 다니겠냐, 7182번 근데 너가 모범수야',
      watches : 90
    }, {
      id: 3,
      title : '아이고, 늦어서 죄송합니다.',
      writer : '장필우',
      contents : '의원님 핳하, 놀기 싫으면 죽어야죠. 이번 선거 아주 넝마가 될껍니다. 자자 갑니다~',
      watches : 55
    }, {
      id: 4,
      title : '너 이거 너가 특종이라 그랬잖아',
      writer : '차국장',
      contents : '자네 프로그램 방금부로 폐지됬어, 국장님 지시사항이고 수고했어, 소주한잔해',
      watches : 32
    }
  ])
  return (
    <div>
      <Grid container rowSpacing={2}>
        {commuBoardList.map((Board)=>(
          <Grid item xs = {12}>
            <CommunityMini id={Board.id} title={Board.title} writer={Board.writer} watches={Board.watches} contents={Board.contents}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CommunityModal