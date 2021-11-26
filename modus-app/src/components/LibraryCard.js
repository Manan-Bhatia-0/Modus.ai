import React from "react";
import { Card, Grid, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import "./LibraryCard.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteJournalEntry } from "../firebase";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';

const useStyles = makeStyles({
  card: {
    width: 300,
    padding: 20,
    margin: 10
  },
  analysisCard: {
    color: '#85A5DA'
  },
  savedCard: {
    color: '#C4C4C4'
  },
  circle: {
    fontSize: "5px"
  }
});
function getDate(timestamp) {
  var date = new Date(timestamp)
  return ((date.getMonth() + 1) +
    "/" + date.getDate() +
    "/" + date.getFullYear())
}


function LibraryCard({ entry }) {
  const classes = useStyles();
  const history = useHistory();
  const handleDeleteEntry = () => {
    deleteJournalEntry(entry.jid)
      .then(() => {
        history.push('/library');
        alert("Journal entry deleted");
      })
  }

  var analysis = "";
  if (entry.status === "submitted") {
    analysis = <Link to={`/individualAnalysis/${entry.title}`} style={{ color: '#474747' }}>Analyze</Link>;
  }

  return (
    <div>
      <div>
        <Card className={classes.card}>
          <Grid container direction="column">
            <Grid container justifyContent="flex-end">
              <Grid item>
                <IconButton onClick={() => handleDeleteEntry()}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid container item justifyContent="space-between">
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
                  fontSize: 14,
                  marginTop: 6,
                  marginBottom: 10,
                }}
              >
                {getDate(entry.createdAt)}
              </Grid>
            </Grid>
            <Grid item xs>
              <div dangerouslySetInnerHTML={{ __html: entry.text.substring(0, 33) + ' ...' }} />
            </Grid>
            <Grid container justifyContent="space-between">
              <Grid item xs
                style={{
                  fontSize: 16,
                  marginTop: 20
                }}
                className={entry.status === "saved" ? classes.savedCard : classes.analysisCard}
              >
                {/* <CircleIcon style={{ fontSize: 8 }} /> */}
                {entry.status}
              </Grid>
              <Grid item xs
                style={{
                  marginTop: 20,
                  marginLeft: 100
                }}
              >
                {analysis}
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </div>
    </div>
  );
}
export default LibraryCard;