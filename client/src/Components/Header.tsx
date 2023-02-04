import React from 'react'
import logo from '../assets/react.svg'
import './Header.css'

const Header = () => {
    
    return (
        <header>
            <nav className="nav">
                <img className="logo" src={logo} />
                <ul className="nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>For Developers</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header