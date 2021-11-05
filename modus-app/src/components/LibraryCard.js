import React from "react";
import { Card, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import "./LibraryCard.css";
import { getMHResources} from "../firebase";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    width: 300,
    padding: 20,
    margin: 15
  },
});

function LibraryCard( {entry} ) {
  const classes = useStyles();
    return (
      <div>
        <div>
          <Card className={classes.card}>
            <Grid container direction="column">
              <Grid container>
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
      </div>
    );
  }
  export default LibraryCard;