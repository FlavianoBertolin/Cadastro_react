import './Logo.css'
import React from 'react'
import logo from "../../assets/imgs/logo.jpg"
import { Link } from 'react-router-dom'


export default function logotipo(props) {
    return ( 
    <aside className="logo">
        <Link to="/" className='logo'><img src={logo} alt="logo" />
        </Link>
    </aside>)
}