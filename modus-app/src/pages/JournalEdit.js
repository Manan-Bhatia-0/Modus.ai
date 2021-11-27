/* eslint-disable */
import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import TextField from "@mui/material/TextField";
import "./modus.css";
import { useState, useEffect } from "react";
import {
  saveJournalEntry,
  searchByTitle,
  submitJournalEntry,
} from "../firebase";
import { confirm } from "react-confirm-box";
import { useParams } from "react-router";
import { makeStyles } from "@mui/styles/";

const optionsWithLabelChange = {
  closeOnOverlayClick: false,
  labels: {
    confirmable: "Confirm",
    cancellable: "Cancel",
  },
};

const onClick = async (options) => {
  const result = await confirm(
    "Are you sure you want to submit your journal?",
    options
  );
  if (result) {
    submitJournalEntry(myValue, textfield);
    history.push("/");
    console.log("Submitted Journal!");
    return;
  }
  console.log("Submitting Cancelled");
};

const useStyles = makeStyles({
  root: {
    margin: "5rem"
  },
})

function JournalEdit() {
  const [myValue, setValue] = useState("");
  const [textfield, setValue2] = useState("");
  const [value, setValue3] = useState("");
  const { title } = useParams();
  const classes = useStyles();
  useEffect(() => {
    if (title !== undefined ){
      const promise = searchByTitle(title);
      promise.then(function(result) {
        setValue(result[0].title);
        setValue2(result[0].text);
        console.log("I set the values!");
      })
    } else {
      // setValue("");
      // setValue2("");
    }
  }), [];


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      {/* <section className="journalEdit" id="journalEdit"> */}
        <h4>Date</h4>
        <form onSubmit={handleSubmit}>
          {/* <div className="title"> */}
            <h1>Title</h1>
            <TextField
              value={myValue}
              onChange={(e) => setValue(e.target.value)}
            />
          {/* </div> */}
          <div>
            <h1>Entry Content</h1>
            <SunEditor
              value={textfield}
              onChange={setValue2}
              // onChange={(e) => setValue2(e.target.value)}
              setOptions={{ height: "500px", width: "1000px" }}
            />
          </div>
          <div>
            <button
              className="save"
              onClick={() => saveJournalEntry(myValue, textfield)}
            >
              Save
            </button>
            <button
              onClick={() => {
                onClick(optionsWithLabelChange);
              }}
            >
              Submit
            </button>
            <button
              className="submit"
              onClick={() => submitJournalEntry(myValue, textfield)}
            >
              Submit
            </button>
          </div>
        </form>
      {/* </section> */}
    </div>
  );
}

export default JournalEdit;
