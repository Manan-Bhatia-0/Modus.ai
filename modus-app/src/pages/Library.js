import React from "react";
import LibraryCard from "../components/LibraryCard";
import {Grid, Divider, Pagination, Select, MenuItem, InputLabel} from '@mui/material'
import "../components/LibraryCard.css"

function Library() {
  const [sort, setSort] = React.useState('dateSaved');

  const handleChange = (event) => {
    setSort(event.target.value);
  }

  return (
    <div
      style={{margin: "5rem"}}
    >
      <Grid container>
        <Grid item xs={10}>
          <h1 
            style={{
              marginTop: "5rem"
            }}>
              User's Library
          </h1>
        </Grid>
        <Grid item xs style={{
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
          <LibraryCard />
        </Grid>
        <Grid container item justifyContent="center">
          <Pagination count={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Library;