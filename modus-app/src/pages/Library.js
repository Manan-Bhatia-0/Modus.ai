import React, { useEffect } from "react";
import LibraryCard from "../components/LibraryCard";
import {Button, Grid, Divider, Pagination, Select, MenuItem, InputLabel, TextField} from '@mui/material'
import "../components/LibraryCard.css"
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { makeStyles } from "@mui/styles/";
import {getJournalEntries, searchByTitle, searchByDate} from "../firebase";

const useStyles = makeStyles({
  root: {
    maxWidth: '60rem'
  },
})

function Library() {
  const classes = useStyles();

  // const [sort, setSort] = React.useState('dateSaved');
  var [entries, setEntries] = React.useState(null);
  const [date, setDate] = React.useState(new Date());
  const [searchField, setSearch] = React.useState('');

  useEffect(() => {
    const promise = getJournalEntries();
    promise.then(function(result) {
      setEntries(result);
    })
  }, 
  []);

  /* handles 'sort' field */
  // const handleChange = (event) => {
  //   setSort(event.target.value);
  // }

  const handleDateChange = (newValue) => {
    setDate(newValue);
    const searchResult = searchByDate(newValue);
    searchResult.then(function(result) {
      console.log(result);
      if (result.length === 0) {
        alert("No results found! Please try another journal entry.");
      } else {
        setEntries(result);
      }
    })
  };

  const onSearchChange = (event) => {setSearch(event.target.value)}

  const handleSearchSubmit = () => {
    const searchResult = searchByTitle(searchField);
    searchResult.then(function(result) {
      console.log(result);
      if (result.length === 0) {
        alert("No results found! Please try another journal entry.");
      } else {
        setEntries(result);
      }
    })
  }

  return (
    <div
      className={classes.root}
      style={{margin: "5rem"}}
    >
      <Grid container>
        <Grid item xs={5}>
          <h1 
            style={{
              marginTop: "5rem"
            }}>
              Library
          </h1>
        </Grid>
        <Grid item xs={3} style={{
            marginTop: "5rem"
          }}
        >
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DesktopDatePicker
              label="Search date"
              inputFormat="MM/dd/yyyy"
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={4} style={{marginTop:"5rem"}}>
            <input
                type="text"
                id="header-search"
                placeholder="Search journal entries"
                onChange={onSearchChange}
            />
            <Button 
              type ="submit" 
              variant="outlined"
              onClick={handleSearchSubmit}
              style={{marginBottom: "5px"}}
            >
              Search
            </Button>
          {/* </form> */}
        </Grid>
        <Grid item xs={2} style={{
              marginTop: "3rem"
            }}
            >
          {/* <InputLabel id="sort-by-label" style={{marginBottom: 5}}>Sort by</InputLabel> */}
          {/* <Select
            labelId="sort-by-label"
            id="sort-by"
            value={sort}
            label="Sort by"
            onChange={handleChange}
            style={{minwidth: 150, marginBottom: 20}}
          >
            <MenuItem value={"dateSaved"}>Date Saved</MenuItem>
            <MenuItem value={"alpha"}>Alphabetical</MenuItem>
            <MenuItem value={"dateCreated"}>Date Created</MenuItem>
          </Select> */}
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
    </div>
  );
}

export default Library;