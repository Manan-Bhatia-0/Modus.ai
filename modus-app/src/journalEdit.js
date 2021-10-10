import React from "react";
import ReactDOM from "react-dom";
import "./journalEdit.css";

function App() {
  return (
    <div className="dashboard">
      <section className="journalEdit" id="journalEdit">
        <h2>Journal Entry Name #342</h2>
        <h4>Date</h4>
        <div className="title">
          <h3>Title</h3>
          /* text box WITHOUT editing options */
        </div>
        <div className="entryContent">
          <h3>Entry Content</h3>
          /* text box WITH editing options */
        </div>
        <div className="buttons">
          /* save allows the user to come back and edit but NO analysis */
          <button className="save">Save</button>
          /* submit allows the user to get analysis of the journal but no edit /
          delete*/
          <button className="submit">Submit</button>
        </div>
      </section>
    </div>
  );
}

export default App;
