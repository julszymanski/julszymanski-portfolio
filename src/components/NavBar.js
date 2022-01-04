import React from 'react'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';


function NavBar() {
    return (
    <nav className="navbar">
        <h1>Julia Szymanski</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/myprojects">My Projects</Link>
            <Link to="/contactme">Contact Me</Link>
        </div>
    </nav>
    )
}

export default NavBar