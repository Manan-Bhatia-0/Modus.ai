import React, { useEffect } from "react";
import LibraryCard from "../components/LibraryCard";
import {Button, Grid, Divider, Pagination, Select, MenuItem, InputLabel, TextField} from '@mui/material'
import "../components/LibraryCard.css"
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';
import {getJournalEntries, searchByTitle, searchByDate} from "../firebase";

function Library() {
  // const [sort, setSort] = React.useState('dateSaved');
  var [entries, setEntries] = React.useState(null);
  const [date, setDate] = React.useState(new Date());
  const [searchField, setSearch] = React.useState('');

  useEffect(() => {
    const promise = getJournalEntries();
    promise.then(function(result) {
      setEntries(result);
      console.log(result);
    })
  }, 
  [entries]);

  /* handles 'sort' field */
  // const handleChange = (event) => {
  //   setSort(event.target.value);
  // }

  const handleDateChange = (newValue) => {
    setDate(newValue);
    searchByDate(date);
  };

  const onSearchChange = (event) => {setSearch(event.value.target)}

  const handleSearchSubmit = () => {
    const searchResult = searchByTitle(searchField);
    setEntries(searchResult);
  }

  return (
    <div
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
          {/* <form action="/" method="get"> */}
          <form>
            <input
                type="text"
                id="header-search"
                value={searchField}
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
          </form>
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
        <Grid item>
          {entries && entries.map((entry) => {
            return (<LibraryCard entry={entry}/>)
          })}
        </Grid>
        <Grid container item justifyContent="center">
          <Pagination count={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Library;