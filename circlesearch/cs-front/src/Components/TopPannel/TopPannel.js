import React from 'react'
import Navbar from './Navbar'

function TopPannel() {
    return (
        <div>
            <UserGreeting/>
        </div>
    )
}

export default TopPannel


function UserGreeting() {
    return (
    <div style={{ width: '100%', justifyContent: 'center', alignContent: 'center' }}>
        <center>
        <h3>내가 찾는 모든 동아리 소식</h3>
        <h1>CircleSearch</h1>
        </center>
        <Navbar />
    </div>)
}