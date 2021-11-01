import React from "react";
import { Card, Grid, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import "./LibraryCard.css";
import {deleteJournalEntry, getMHResources} from "../firebase";

const useStyles = makeStyles({
  card: {
    width: 300,
    padding: 20
  },
});

function LibraryCard(entry) {
  const classes = useStyles();
  // entry&&(console.log(entry[0].title))
  console.log(entry.entry[0][0].status)
    return (
      <div>
          <Card className={classes.card}>
          <Grid container direction="column">
            <Grid container style={{marginBottom: 5}} justifyContent='end'>
              <IconButton onClick={() => deleteJournalEntry()}>
                <DeleteIcon/>
              </IconButton>
            </Grid>
            <Grid container>
              <Grid container item>
                <Grid item xs 
                  style={{
                    fontSize: 24,
                    marginBottom: 10
                  }}
                >
                  {entry.entry[0][0].title}
                </Grid>
                <Grid item 
                  style={{
                    fontSize: 18,
                    marginTop: 6,
                    marginBottom: 10
                  }}
                >
                  {entry.entry[0][0].createdAt}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
            {entry.entry[0][0].text}
            </Grid>
            <Grid item xs 
                  style={{
                    fontSize: 16,
                    marginTop: 20
                  }}
            >
              {entry.entry[0][0].status}
            </Grid>  
          </Grid>
      </Card>
      </div>
    );
  }
  export default LibraryCard;