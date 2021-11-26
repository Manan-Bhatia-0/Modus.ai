/* eslint-disable */
import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import TextField from "@mui/material/TextField";
import "./journalEdit.css";
import { useState } from "react";
import {
  saveJournalEntry,
  submitJournalEntry,
} from "../firebase";
import { Link, useHistory } from "react-router-dom";
import { confirm } from "react-confirm-box";
import { StyledEngineProvider } from "@mui/styled-engine";

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

function JournalEdit() {
  const [myValue, setValue] = useState("");
  const [textfield, setValue2] = useState("");
  const [value, setValue3] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="dashboard">
      <section className="journalEdit" id="journalEdit">
        <h2>Journal Entry Name #342</h2>
        <h4>Date</h4>
        <form onSubmit={handleSubmit}>
          <div className="title">
            <h3>Title</h3>
            <TextField
              value={myValue}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="entryContent">
            <h3>Entry Content</h3>
            <SunEditor
              value={textfield}
              onChange={setValue2}
              // onChange={(e) => setValue2(e.target.value)}
              setOptions={{ height: "500px", width: "1000px" }}
            />
          </div>
          <div className="buttons">
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
              {" "}
              Submit{" "}
            </button>
            <button
              className="submit"
              onClick={() => submitJournalEntry(myValue, textfield)}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default JournalEdit;
