import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { logout } from "../firebase";

function NavBar() {
  return (
    <Navbar defaultActiveKey="/" className="flex-column">
      <div>
        <Nav.Link href="/home">Dashboard</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/write">New Page</Nav.Link>
        <Nav.Link href="/library">Library</Nav.Link>
        <Nav.Link href="/analysis">Analysis</Nav.Link>
        <Nav.Link href="/faq">FAQ</Nav.Link>
        <Nav.Link href="/" onPress={() => this.logout()}>
          Log Out
        </Nav.Link>
      </div>
    </Navbar>
  );
}
export default NavBar;
