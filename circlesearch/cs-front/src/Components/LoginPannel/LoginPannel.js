import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function LoginPannel() {
  return (
    <div>
        <button><Link to="/login">로그인</Link></button>
        <button><Link to="/register1">회원가입</Link></button>
    </div>
  )
}

export default LoginPannel