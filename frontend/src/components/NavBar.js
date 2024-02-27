import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navBar">
            <div></div>
            <div className="links">
                <Link to="/">Home</Link> |
            </div>
        </nav>
    )
}

export default Navbar;