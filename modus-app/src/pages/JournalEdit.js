/* eslint-disable */ 
import React from "react";
import ReactDOM from "react-dom";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import TextField from "@mui/material/TextField";
import "./journalEdit.css";
import {useRef } from 'react'
import {useState} from 'react' 
import {getJournalEntries, saveJournalEntry, submitJournalEntry} from "../firebase";

function JournalEdit() {
  const [title, setTitle] = useState('') 
  const [textfield, setTextField] = useState('')

  return (
    <div className="dashboard">
      <section className="journalEdit" id="journalEdit">
        <h2>Journal Entry Name #342</h2>
        <h4>Date</h4>
        <form >
        <div className="title">
          <h3>Title</h3>
          <TextField value={title} 
			onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className="entryContent">
          <h3>Entry Content</h3>
          <SunEditor value={textfield} 
      onChange={setTextField}
      setOptions={{ height: "500px", width: "1000px" }} />
        </div>
        <div className="buttons">
          <button className="save"
          onClick={() => saveJournalEntry(title, textfield)}>Save</button>
          <button className="submit" onClick={() => submitJournalEntry(title, textfield)}>Submit</button>
        </div>
        </form>
      </section>
    </div>
  );
}

/* function submit() // no ';' here
{
    var elem = document.getElementsByClassName("submit2");
    console.log(elem.value);
} */

export default JournalEdit;
