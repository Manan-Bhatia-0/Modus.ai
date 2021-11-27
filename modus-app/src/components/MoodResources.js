import React from "react";
import {Grid, Divider, Card} from '@mui/material'

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
              <Divider style={{width: "60rem"}}/>
              <h4 
                style={{
                  marginTop: "1rem"
                }}>
                  Here is what we recommend for you based on your latest entries:
              </h4>
            </Grid>
          </Grid>
         
          <Grid container direction="column" style={{marginTop: "2rem"}}>
            <Grid item>
                <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
                <a target="_blank" href="http://www.afsp.org/" style={{ color: '#578ff1' }}>American Foundation for Suicide Prevention</a>
                </Card>
                <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
                <a target="_blank" href="https://www.mhanational.org/" style={{ color: '#578ff1' }}>Mental Health America</a>
                </Card>
                <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
                    <a target="_blank" href="https://adaa.org/understanding-anxiety/panic-disorder-agoraphobia/symptoms/" style={{ color: '#578ff1' }}>Anxiety and Depression</a>
                </Card>
                <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
                <a target="_blank" href="https://screening.mhanational.org/screening-tools/depression/?ref=http://depression-screening.org" style={{ color: '#578ff1' }}>Depression Screening</a>
                </Card>
                <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
                <a target="_blank" href="https://www.uclahealth.org/marc/mindful-meditations" style={{ color: '#578ff1' }}>Guided Meditation</a>
                </Card>
                <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
                <a target="_blank" href="https://iocdf.org/" style={{ color: '#578ff1' }}>International OCD Foundation</a>
                </Card>
            </Grid>
          </Grid>
        </div>
      );

} export default MoodResources;