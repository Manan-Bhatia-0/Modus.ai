import React from "react";
import ReactDOM from "react-dom";
import "./journalDashboard.css";

function JournalDashboard() {
  return (
    <div className="dashboard">
      <section className="topDashboard" id="topDashboard">
        <h2>Hi User. How are you today?</h2>
        /* Used to write a new entry */ /* Add an icon also with the button */
        <button className="writeButton">Write New Entry</button>
      </section>
      <section className="mainDashboard" id="mainDashboard">
        <h3>Recent Entries</h3>
        /* list of the recent entries */
      </section>
    </div>
  );
}

export default JournalDashboard;
