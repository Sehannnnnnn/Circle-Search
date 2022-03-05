import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../Slices/authSlice'


function LogoutPannel() {
  return (
    <div>
        <button><Link to="/">로그아웃</Link></button>
    </div>
  )
}

export default LogoutPannel