import React, { useState } from 'react';
import './NavBar.css'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="navbar-container">
                <div className="logo-container">
                    <img src="logo.png" alt="Logo" />
                    <h1>My Website</h1>
                </div>
                <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="login-container">
                    <button>Login</button>
                </div>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className={menuOpen ? "bar open" : "bar"}></div>
                    <div className={menuOpen ? "bar open" : "bar"}></div>
                    <div className={menuOpen ? "bar open" : "bar"}></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
