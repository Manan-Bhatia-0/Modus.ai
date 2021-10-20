import React from "react";
import { Card, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import "./LibraryCard.css";

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum nulla eu dapibus aliquam...
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