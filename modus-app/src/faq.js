import React from "react";
import ReactDOM from "react-dom";
import "./faq.css";

function App() {
  return (
    <div className="dashboard">
      <header>
        <a href="#" className="sidebar">
          <div className="navigation">
            /* change the naviagtion to icons */ /*navigation is on the sidebar
            and logout will be on the way bottom */
            <a href="#Profile">Profile</a>
            <a href="#dashboard">Dashboard</a>
            <a href="#library">Library</a>
            <a href="#analysis">Analysis</a>
            <a href="#question">FAQ</a>
            <a href="#logout">Logout</a>
          </div>
        </a>
      </header>
      <section className="faq" id="faq">
        <h2>FAQ</h2>
        /* line break */ /* tabs that open up with answers inside there */
        <div className="question1">
          <h3>Question</h3>
          <text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </text>
        </div>
        <div className="question2">
          <h3>Question</h3>
          <text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </text>
        </div>
        <div className="question3">
          <h3>Question</h3>
          <text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </text>
        </div>
        <div className="question4">
          <h3>Question</h3>
          <text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </text>
        </div>
      </section>
    </div>
  );
}

export default App;
