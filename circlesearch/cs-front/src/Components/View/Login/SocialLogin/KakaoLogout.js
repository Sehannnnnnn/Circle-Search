// import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { KAKAO_LOGOUT_URL, REST_API_KEY } from './kakao_config'

function KakaoLogout() {
    const navigate = useNavigate();
    const logoutKakao = async () => {
        try {
            let res = await window.Kakao.API.request({
                url: "/v1/user/logout",
            });
            console.log(res);
            navigate('/', {replace: true});
        } catch(err) {
            console.log(err);
        }
    }

  return (
      <button onClick={logoutKakao}>
          로그아웃
      </button>
    
  )
}

export default KakaoLogout