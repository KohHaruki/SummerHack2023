import { NavLink } from 'react-router-dom'
import logo from '../assets/react.svg'
import './Header.css'

const Header = () => {
    
    return (
        <header>
            <nav className="nav">
                <img className="logo" src={logo} />
                <h1>Online Image Scanner</h1>
                <ul className="nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li><NavLink to="developer">For Developers</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header