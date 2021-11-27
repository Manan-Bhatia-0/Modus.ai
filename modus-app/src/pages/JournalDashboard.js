/* eslint-disable */ 
import React from "react";
import ReactDOM from "react-dom";
import "./journalDashboard.css";
import clouds from './dashboard-img.png'
import { getUserName } from "../firebase";
     
function JournalDashboard() {
  return (
    <div className="dashboard">
      <img src={clouds} alt="Logo" width="87%" height="50%" />
      <div class="centered">
        <h1>
          Hello {getUserName()}, <br></br> &emsp; &emsp; how are you doing?
          </h1>
          </div>
    </div>
  );
}

export default JournalDashboard;