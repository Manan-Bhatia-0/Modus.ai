
import React from "react";
import {  Link } from "react-router-dom";
function NavBar() {

    return (
        <div>
            <li>
                <Link to="/">Dashboard</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/write">New Page</Link>
            </li>
            <li>
                <Link to="/library">Library</Link>
            </li>
            <li>
                <Link to="/analysis">Analysis</Link>
            </li>
            <li>
                <Link to="/faq">FAQ</Link>
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
        </div>
    );

}

export default NavBar;