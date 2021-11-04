import React from "react";
import { useEffect, useState, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { useAuth } from "../pages/AuthContext";
import { Link, useHistory } from "react-router-dom";
import app from "../firebase";

function NavBar() {
  const [error, setError] = useState("");
  const currentUser = useAuth();
  const logout = useAuth();
  const history = useHistory();

  async function pressLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <Navbar defaultActiveKey="/" className="flex-column">
      <div>
        <Nav.Link href="/home">Dashboard</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/write">New Page</Nav.Link>
        <Nav.Link href="/library">Library</Nav.Link>
        <Nav.Link href="/analysis">Analysis</Nav.Link>
        <Nav.Link href="/faq">FAQ</Nav.Link>
        <Nav.Link href="/" onClick={this.pressLogout}>
          Logout
        </Nav.Link>
      </div>
    </Navbar>
  );
}
export default NavBar;
