import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logokbir.png';
import heartIcon from '../assets/fav.png';
import basketIcon from '../assets/basket.png';

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo} alt="Glowing Logo" />
                </Link>
            </div>
            <ul className="navbar-links">
                <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/elements">Elements</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
            <div className="navbar-search">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="navbar-icons">
                <button className="icon-btn">
                    <img height={26} width={26} src={heartIcon} alt="heart" />
                </button>
                <Link to="/cart">
                    <button className="icon-btn">
                        <img height={26} width={26} src={basketIcon} alt="bag" />
                    </button>
                </Link>
            </div>
            <div className="navbar-auth">
                <Link to="/login" className="login-btn-navbar">Login</Link>
                <Link to="/login" className="register-btn-navbar">Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;
