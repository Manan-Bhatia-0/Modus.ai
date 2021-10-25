import React from "react";
import {Grid, Divider, Card} from '@mui/material'
import { Link } from "react-router-dom";

function MoodResources() {
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
                  Mental Health Resources
              </h1>
              <h5 
                style={{
                  marginTop: "1rem"
                }}>
                  Here is what we have for you based on your latest entries:
              </h5>
            </Grid>
          </Grid>
          <Divider style={{width: "50rem"}}/>
          <Grid container direction="column" style={{marginTop: "2rem"}}>
            <Grid item>
                <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
                    <Link>Url 1</Link>
                </Card>
                <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
                    <Link>Url 2</Link>
                </Card>
                <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
                    <Link>Url 3</Link>
                </Card>
            </Grid>
          </Grid>
        </div>
      );

} export default MoodResources;