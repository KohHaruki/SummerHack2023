import { NavLink } from 'react-router-dom'
import logo from '../assets/cabbage.svg'
import './Header.css'

const Header = () => {
    
    return (
        <header>
            <nav className="nav">
                <a href="#home">
                    <img className="logo" src={logo} />
                </a>
                <a href="#home">
                    <h1>Online Image Scanner</h1>
                </a>
                <ul className="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#developer">For Developers</a></li>
                </ul>
                <NavLink to="login" target='blank'><button className="login-button">Log In</button></NavLink>
            </nav>
        </header>
    )
}

export default Header