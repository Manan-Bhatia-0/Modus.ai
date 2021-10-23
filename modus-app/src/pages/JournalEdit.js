/* eslint-disable */ 
import React from "react";
import ReactDOM from "react-dom";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import TextField from "@mui/material/TextField";
import "./journalEdit.css";

function JournalEdit() {
  return (
    <div className="dashboard">
      <section className="journalEdit" id="journalEdit">
        <h2>Journal Entry Name #342</h2>
        <h4>Date</h4>
        <div className="title">
          <h3>Title</h3>
          <TextField />
        </div>
        <div className="entryContent">
          <h3>Entry Content</h3>
          <SunEditor setOptions={{ height: "500px", width: "1000px" }} />
        </div>
        <div className="buttons">
          <button className="save">Save</button>
          <button className="submit" onClick={submitfn()} >Submit</button>

        </div>
      </section>
    </div>
  );
}

function submitfn() {
  var title = document.getElementsByClassName('title').value;
  var entry_content = document.getElementsByClassName('entryContent').value;
  console.log('Client-side code running');
  console.log(title)
  console.log(entry_content)
}

export default JournalEdit;
