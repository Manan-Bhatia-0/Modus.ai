/* eslint-disable */ 
import React from "react";
import ReactDOM from "react-dom";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import TextField from "@mui/material/TextField";
import "./journalEdit.css";
import {useRef } from 'react'
import {useState} from 'react' 
import { saveJournalEntry } from "../firebase";

function JournalEdit() {
  const [myValue, setValue] = useState('') 
  const [textfield, setValue2] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const entry = { myValue, textfield };
    console.log(entry);
  }

  return (
    <div className="dashboard">
      <section className="journalEdit" id="journalEdit">
        <h2>Journal Entry Name #342</h2>
        <h4>Date</h4>
        <form onSubmit={handleSubmit}>
        <div className="title">
          <h3>Title</h3>
          <TextField value={myValue} 
			onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className="entryContent">
          <h3>Entry Content</h3>
          <SunEditor value={textfield} 
      onChange={setValue2}
      // onChange={(e) => setValue2(e.target.value)} 
      setOptions={{ height: "500px", width: "1000px" }} />
        </div>
        <div className="buttons">
          <button className="save"
          onClick={() => saveJournalEntry(myValue, textfield)}>Save</button>
          <button className="submit" onClick={() => submitJournalEntry(myValue, textfield)}>Submit</button>

        </div>
        </form>
      </section>
    </div>
  );
}


// function submitfn(e, textfield) {

//   console.log(e)
//   console.log(textfield)
//   // var title = document.getElementsByClassName('title').value;
//   // var entry_content = document.getElementsByClassName('entryContent').useRef;
//   console.log('Client-side code running');
//   // console.log(title)
//   // console.log(entry_content)
// }

export default JournalEdit;
