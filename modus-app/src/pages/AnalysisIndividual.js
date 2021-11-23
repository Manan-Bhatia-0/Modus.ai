import React from "react";
import {Grid, Divider} from '@mui/material'
import graph_3 from '../imgs/graph_3.png';
import { plotPieChart, getLatestEntryMoodScores } from "../firebase";

// function plotPieChart() {
//   return (
//   <div>
//   <head>
//       <script src='https://cdn.plot.ly/plotly-2.4.2.min.js'/>
//       <title>hello</title>
//   </head>
//   <body>
//       <div id='myDiv'/>
//   </body>
//   </div>);
// }

function plotPieChartJs() {
  var moodScores = getLatestEntryMoodScores();
  plotPieChart(moodScores);
}


function AnalysisIndividual() {
    return (
        <div id='myDiv'>
        <body>
          plotPieChartJs()
          </body>
        </div>
      );

} export default AnalysisIndividual;



{/* <Grid container style={{margin: '5rem'}}>
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
</Grid> */}