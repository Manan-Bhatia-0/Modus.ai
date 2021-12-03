/* eslint-disable */
import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
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
import {Grid, TextField} from '@mui/material'

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
  entryTextField: {
    marginTop: "1rem"
  },
  subtitle: {
    marginTop: "1rem",
    fontSize: 25
  },
  saveButton: {
    width: 200,
    margin: "1rem",
  },
  submitButton: {
    width: 200,
    margin: "1rem",
    backgroundColor: "#6384BD"
  }
})

function JournalEdit() {
  var [myValue, setValue] = useState("");
  var [textfield, setValue2] = useState("");
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
  }), [title];


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <form onSubmit={handleSubmit}>
          <Grid item container justifyContent="space-between">
            <Grid item>
              <TextField
                value={myValue}
                label="Title"
                onChange={(e) => setValue(e.target.value)}
              />
            </Grid>
            <Grid item>
              <h5>{getDateStr()}</h5>
            </Grid>
          </Grid>
          <Grid item className={classes.subtitle}>
            Entry Content
          </Grid>
          <Grid item className={classes.entryTextField}>
            <SunEditor
              value={textfield}
              onChange={setValue2}
              // onChange={(e) => setValue2(e.target.value)}
              setOptions={{ height: "500px", width: "1000px" }}
            />
          </Grid>
          <Grid container item direction="column" alignItems="flex-end">
            <Grid item>
              <button
                className={classes.saveButton}
                onClick={() => saveJournalEntry(myValue, textfield)}
              >
                Save
              </button>
              <button
                className={classes.submitButton}
                onClick={() => {
                  onClick(optionsWithLabelChange);
                }}
              >
                Submit with message
              </button>
              <button
                className={classes.submitButton}
                onClick={() => submitJournalEntry(myValue, textfield)}
              >
                Submit
              </button>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
        </form>
      </Grid>  
    </div>
  );
}

function getDateStr() {
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

var newDate =  month + '/' + day + '/' + year
return newDate
}

export default JournalEdit;
