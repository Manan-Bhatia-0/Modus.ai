import React from "react";
import { useParams } from 'react-router-dom'
import {Grid, Divider} from '@mui/material'
import graph_3 from '../imgs/graph_3.png';
import {getLatestEntryMoodScores } from "../firebase";
import Plotly from 'plotly.js-dist'

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
  pieChart(moodScores);
}

function pieChart(dict_t2e) {
  var data = [{
      values: Object.values(dict_t2e),
      labels: Object.keys(dict_t2e),
      type: 'pie'
  }];
  var layout = {
      height: 400,
      width: 500
  };
  Plotly.newPlot('myDiv', data, layout);
}

function AnalysisIndividual() {
  const { title } = useParams();
    return (
        <div id='myDiv'>
          hello
        <body>
          {/* <script type = "text/javascript"> */}
            {plotPieChartJs()}
          {/* </script> */}
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