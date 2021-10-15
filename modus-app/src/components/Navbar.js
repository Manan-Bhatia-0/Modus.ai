
import React from "react";
import Nav from 'react-bootstrap/Nav'
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {
    return (
        <Nav bsPrefix="navbar" defaultActiveKey="/" className="flex-column">
            <div>
            <Nav.Link bsPrefix="text" href="/">Dashboard</Nav.Link>
            <Nav.Link bsPrefix="text" href="/profile">Profile</Nav.Link>
            <Nav.Link bsPrefix="text" href="/write">New Page</Nav.Link>
            <Nav.Link bsPrefix="text" href="/library">Library</Nav.Link>
            <Nav.Link bsPrefix="text" href="/analysis">Analysis</Nav.Link>
            <Nav.Link bsPrefix="text" href="/faq">FAQ</Nav.Link>
            <Nav.Link bsPrefix="text" href="/logout">Logout</Nav.Link>
            </div>
        </Nav>
    );

}
export default NavBar;