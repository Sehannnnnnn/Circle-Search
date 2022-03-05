import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
import '../TopPannel/Navbar.css'


function NavBar() {
    return (
        <div style={{display: 'flex' , background: '#C3EAA5', height: '60px'}}>
            <ul className='Navul' style={{listStyleType: 'none', color: 'white'}}>
                <li className='Navli'>
                    <Link to="/">Home</Link>
                    <Link to="/login">로그인</Link>
                    <Link to="/register1">회원가입</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar