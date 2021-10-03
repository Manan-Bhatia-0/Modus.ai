import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <div className="dashboard">
      <header>
        <a href="#" className="sidebar">
          <div className="navigation">
            /* change the naviagtion to icons */
            <a href="#Profile">Profile</a>
            <a href="#Services">Services</a>
            <a href="#About">About Us</a>
            <a href="#Contact">Contact Us</a>
          </div>
        </a>
      </header>
      <section className="topDashboard" id="topDashboard"></section>
      <section className="mainDashboard" id="mainDashboard"></section>
    </div>
  );
}

export default App;
