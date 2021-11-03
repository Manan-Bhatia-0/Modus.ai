import React from "react";
import { Card, Grid, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import "./LibraryCard.css";
import {deleteJournalEntry, getMHResources} from "../firebase";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  card: {
    width: 300,
    padding: 20,
    margin: 15
  },
});

function LibraryCard( {entry} ) {
  // const history = useHistory();
  const handleDeleteEntry = () => {
    deleteJournalEntry(entry.jid)
    .then(() => {
      console.log("DELETE JOURNAL ENTRY")
      // window.location.href='/library';
    }) 
  }

  const classes = useStyles();
<<<<<<< HEAD
  //entry&&(console.log(entry[0].title))
=======
>>>>>>> 0946734e7dbcf1bdc12d84263f9dd289ad3ccfca
    return (
      <div>
          <Card className={classes.card}>
          <Grid container direction="column">
            <Grid container style={{marginBottom: 5}} justifyContent='end'>
              <IconButton onClick={() => handleDeleteEntry()}>
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
                  {entry.title}
                </Grid>
                <Grid item 
                  style={{
                    fontSize: 18,
                    marginTop: 6,
                    marginBottom: 10
                  }}
                >
                  {/* {entry.createdAt} */}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              {entry.text}
            </Grid>
            <Grid item xs 
                  style={{
                    fontSize: 16,
                    marginTop: 20
                  }}
            >
              {entry.status}
            </Grid>  
          </Grid>
      </Card>
      </div>
    );
  }
  export default LibraryCard;