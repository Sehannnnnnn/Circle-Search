import React from 'react'
import {
  KAKAO_AUTH_URL_LOGIN
} from './kakao_config.js'
import kakao_login_png from './kakao_login_medium_narrow.png'
function Kakaologin() {
  return (
    <div>
      <a href = {KAKAO_AUTH_URL_LOGIN}>
        <img src={kakao_login_png} alt='카카오로그인'></img>
      </a>
    </div>
  )
}

export default Kakaologin