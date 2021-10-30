import React from "react";
import {Grid, Divider} from '@mui/material'
import graph_3 from '../imgs/graph_3.png';

function AnalysisIndividual() {
    return (
        <div>
          <Grid container style={{margin: '5rem'}}>
            <Grid item xs={10}>
                <h1 
                  style={{
                    marginTop: "5rem"
                  }}>
                    Journal Title Analysis
                </h1>
                Date submitted
                <Divider style={{width: "50rem"}}/>
                <Grid container item justifyContent="center">
                  <Grid item>
                    <img style={{width: 400, marginTop: 40}} src={graph_3} alt="graph_3" />
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </div>
      );

} export default AnalysisIndividual;