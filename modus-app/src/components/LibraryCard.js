import React from "react";
import { Card, Grid, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import "./LibraryCard.css";
import {deleteJournalEntry} from "../firebase";

const useStyles = makeStyles({
  card: {
    width: 300,
    padding: 20
  },
});

function LibraryCard() {
  const classes = useStyles();
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
                  Title
                </Grid>
                <Grid item 
                  style={{
                    fontSize: 18,
                    marginTop: 6,
                    marginBottom: 10
                  }}
                >
                  Date
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
            I went to the carnival today and I rode a lot of roller coasters and it was very exciting! I can't wait to go there again.
            </Grid>
            <Grid item xs 
                  style={{
                    fontSize: 16,
                    marginTop: 20
                  }}
            >
              Status
            </Grid>  
          </Grid>
      </Card>
      </div>
    );
  }
  export default LibraryCard;