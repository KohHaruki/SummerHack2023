import { NavLink } from 'react-router-dom'
import logo from '../assets/cabbage.svg'
import './Header.css'

const Header = () => {
    
    return (
        <header>
            <nav className="nav">
                <NavLink to="/">
                    <img className="logo" src={logo} />
                </NavLink>
                <NavLink to="/">
                    <h1>Online Image Scanner</h1>
                </NavLink>
                <ul className="nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="developer">For Developers</NavLink></li>
                </ul>
                {/* <NavLink to="login"><button className="login-button">Log In</button></NavLink> */}
                <button className="login-button"><NavLink to="login">Log In</NavLink></button>
            </nav>
        </header>
    )
}

export default Header