import React from "react";
import ReactDOM from "react-dom";
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';

function Faq() {
  return (
      <div className="dashboard">
        <section className="faq" id="faq">
          <h2>FAQ</h2>
          <Divider classname="divider" />
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

export default Faq;