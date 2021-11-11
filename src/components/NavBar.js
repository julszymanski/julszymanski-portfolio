import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
    <nav className="navbar">
        <h1>Welcome!</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/myprojects">My Projects</Link>
            <Link to="/contactme">Contact Me</Link>
        </div>
    </nav>
    )
}

export default NavBar