import React from "react";
import ReactDOM from "react-dom";
import "./journalEdit.css";

function App() {
  return (
    <div className="dashboard">
      <header>
        <a href="#" className="sidebar">
          <div className="navigation">
            /* change the naviagtion to icons */
            <a href="#Profile">Profile</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#library">Library</a>
            <a href="#analysis">Analysis</a>
            <a href="#question">FAQ</a>
            <a href="#logout">Logout</a>
          </div>
        </a>
      </header>
      <section className="journalEdit" id="journalEdit">
        <div className="title"></div>
        <div className="entryContent"></div>
        <div className="buttons"></div>
      </section>
    </div>
  );
}

export default App;
