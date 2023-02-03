import React from 'react'
import logo from '../assets/react.svg'

const Header = () => {
    
    return (
        <header>
            <nav className="nav">
                <img className="logo" src={logo} />
                <ul className="nav">
                    <li>HOME</li>
                    <li>FOR DEVELOPERS</li>
                    <li>ABOUT</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header