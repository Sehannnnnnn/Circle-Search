import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoginPannel from '../LoginPannel/LoginPannel'
import LogoutPannel from '../LoginPannel/LogoutPannel'
import Navbar from './Navbar'

function TopPannel() {
    const isLoggedIn = useSelector(state => state.auth.login)
    const [loginCheck, setloginCheck] = useState(isLoggedIn);
    setloginCheck(isLoggedIn)

    useEffect(() => {
      setloginCheck(isLoggedIn)
      return () => {
      }
    }, [])
    
    console.log('1:',isLoggedIn);
    console.log('2:', loginCheck)
    
    if (loginCheck) {
        return (
        <UserGreeting/>
        )
    } else {
        return (
        <GuestGreeting/>
    )
    }
}

export default TopPannel


function UserGreeting() {
    return (<div style={{ width: '100%', justifyContent: 'center', alignContent: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>CircleSearch</h1>
        <h2>로그인되었습니다.</h2>
        <LogoutPannel />
        <Navbar />
    </div>)
}

function GuestGreeting() {
    return (
        <div style={{ width: '100%', justifyContent: 'center', alignContent: 'center' }}>
            <h1 style={{ textAlign: 'center' }}>CircleSearch</h1>
            <h2>로그아웃되었습니다.</h2>
            <LoginPannel />
            <Navbar />
        </div>
    )
}