/* eslint-disable */ 
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./modus.css";
import clouds from './dashboard-img.png'
import { getUserName, getTopThreeLatestEntries } from "../firebase";
import LibraryCard from "../components/LibraryCard";
import {Button, Grid, Divider, Pagination, TextField} from '@mui/material'
import "../components/LibraryCard.css"
import { makeStyles } from "@mui/styles/";
import {getJournalEntries, searchByTitle, searchByDate} from "../firebase";
     
const useStyles = makeStyles({
  root: {
    maxWidth: '60rem'
  },
})

function JournalDashboard() {
  const classes = useStyles();

  // const [sort, setSort] = React.useState('dateSaved');
  var [entries, setEntries] = React.useState(null);
  const [date, setDate] = React.useState(new Date());
  const [searchField, setSearch] = React.useState('');

  useEffect(() => {
    const promise = getTopThreeLatestEntries();
    promise.then(function(result) {
      setEntries(result);
    })
  }, 
  []);

  return (
    
    <div
      className={classes.root}
      style={{margin: "5rem"}}
    > 
  <Grid
    container
    direction="column"
  >
    <Grid item>
      <div className="dashboard">
        {/* <img src={clouds} alt="Logo" width="87%" height="50%" /> */}
        <img src={clouds} alt="Logo" width="87%" height="50%" />
        <div class="centered">
          <h1>
            Hello {getUserName()}, <br></br> &emsp; &emsp; how are you doing?
            </h1>
            </div>
      </div>
    </Grid>
      <Grid container item justifyContent="space-between">
      <Grid item xs={10} style={{
            marginTop: "5rem"
          }}
        >
        </Grid>
        <Grid item xs={5}>
          <h1 
            style={{
              marginTop: "5rem"
            }}>
              Most Recent Entries
          </h1>
        </Grid>
      </Grid>
      
      <Divider style={{width: "65rem"}}/>
      <Grid container direction="column" style={{marginTop: "2rem"}}>
        <Grid container item>
          {entries && entries.map((entry) => {
              return (<LibraryCard key={entry.title} entry={entry}/>)
          })}
        </Grid>
        <Grid container item justifyContent="center">
          <Pagination count={1} />
        </Grid>
      </Grid>
      </Grid>
    </div>
  );
}

export default JournalDashboard;



