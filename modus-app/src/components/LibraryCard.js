import React from "react";
import { Card, Grid, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import "./LibraryCard.css";
import DeleteIcon from '@mui/icons-material/Delete';
import {deleteJournalEntry, searchByTitle, getMHResources} from "../firebase";
import { useHistory, useParams } from "react-router";
import { Link } from 'react-router-dom';
import Button from "@restart/ui/esm/Button";

const useStyles = makeStyles({
  card: {
    width: 275,
    padding: 20,
    margin: 10
  },
});

function LibraryCard( {entry} ) {
  const classes = useStyles();
  const history = useHistory();
  const handleDeleteEntry = () => {
    deleteJournalEntry(entry.jid)
    .then(() => {
      history.push('/library');
      alert("Journal entry deleted");
    }) 
  }
    return (
      <div>
        <div>
          <Card className={classes.card}>
            <Grid container direction="column">
              <Grid container>
                <Grid item container justifyContent='end'>
                  <IconButton onClick={() => handleDeleteEntry()}>
                    <DeleteIcon/>
                  </IconButton>
                </Grid>
                <Grid container item>
                  <Link to={`/journal/${entry.title}`} style={{ textDecoration: 'none', color: '#474747' }}>
                    <Grid item xs 
                      style={{
                        fontSize: 24,
                        marginBottom: 10
                      }}
                    >
                      {entry.title}
                    </Grid>
                  </Link>
                  <Grid item 
                    style={{
                      fontSize: 18,
                      marginTop: 6,
                      marginBottom: 10,
                      marginLeft: 50
                    }}
                  >
                    {entry.createdAt}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <div  dangerouslySetInnerHTML={{__html: entry.text}} />
              </Grid>
              <Grid container>
                <Grid item xs 
                      style={{
                        fontSize: 16,
                        marginTop: 20
                      }}
                >
                  {entry.status}
                </Grid>
                <Grid item xs style={{width: 50, height:5}}>
                  <Link to={`/individualAnalysis/${entry.title}`} style={{ textDecoration: 'none', color: '#474747' }}>
                    Analysis
                  </Link>
                </Grid> 
              </Grid> 
            </Grid>
        </Card>
      </div>
      </div>
    );
  }
  export default LibraryCard;