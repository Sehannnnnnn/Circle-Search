import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoginPannel from '../LoginPannel/LoginPannel'
import LogoutPannel from '../LoginPannel/LogoutPannel'
import Navbar from './Navbar'

function TopPannel() {
    const isLoggedIn = useSelector(state => state.auth.login)

    if (isLoggedIn) {
        return (
        <div style={{width: '100%', justifyContent:'center', alignContent: 'center'}}>
            <h1 style={{textAlign: 'center'}}>CircleSearch</h1>
            <LogoutPannel/>
            <Navbar/>
        </div>
        )
    }
    return (
    <div style={{width: '100%', justifyContent:'center', alignContent: 'center'}}>
        <h1 style={{textAlign: 'center'}}>CircleSearch</h1>
        <LoginPannel/>
        <Navbar/>
    </div>
    )
}

export default TopPannel
