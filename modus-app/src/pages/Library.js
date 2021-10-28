import React from "react";
import LibraryCard from "../components/LibraryCard";
import {Button, Grid, Divider, Pagination, Select, MenuItem, InputLabel, TextField} from '@mui/material'
import "../components/LibraryCard.css"
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';

function Library() {
  const [sort, setSort] = React.useState('dateSaved');
  // const [title, setTitle] = React.useState('');
  // const [date, setDate] = React.useState('');
  // const [content, setContent] = React.useState('');
  // const [status, setStatus] = React.useState('');
  const [entries, setEntries] = React.useState(null);

  const handleChange = (event) => {
    setSort(event.target.value);
  }

  const [date, setDate] = React.useState(new Date('2021-10-18T21:11:54'));

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  // React.useEffect(() => {
  //   fetch('http://localhost:8000/users')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // console.log(data);
  //       // console.log(data[0].uid[0].journalEntries[0].jid1[0].createdAt);
  //       // console.log(data[0].uid[0].journalEntries);
  //       setEntries(data[0].uid[0].journalEntries);
        
  //     })
  // }, []);
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
              User's Library
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
                placeholder="Search journal entries"
            />
            <Button type ="submit" variant="outlined" style={{marginBottom: "5px"}}>Search</Button>
          </form>
        </Grid>
        <Grid item xs={2} style={{
              marginTop: "3rem"
            }}
            >
          <InputLabel id="sort-by-label" style={{marginBottom: 5}}>Sort by</InputLabel>
          <Select
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
          </Select>
        </Grid>
      </Grid>
      
      <Divider style={{width: "65rem"}}/>
      <Grid container direction="column" style={{marginTop: "2rem"}}>
        <Grid item>
          <LibraryCard/>
        </Grid>
        <Grid container item justifyContent="center">
          <Pagination count={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Library;