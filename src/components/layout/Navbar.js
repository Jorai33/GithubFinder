import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Navbar(props) {       
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={props.icon}></i>
                {props.title}
            </h1>
            <ul>                
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );   
}

Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github m"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar
