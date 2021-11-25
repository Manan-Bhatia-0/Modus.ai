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

function AnalysisIndividual() {
  const { title } = useParams();
    return (
        <div>
          <head>
            <script src='./AnalysisIndividualCharts.js'></script>
            </head>
          hello
          {console.log('pie chart created')}
        <body>
          <div id='pieChart'>
            {plotPieChartJs()}
            <script>

            </script>
            </div>
          </body>
        </div>
      );

} export default AnalysisIndividual;

function pieChart(dict_t2e) {
  // var  = document.getElementById("graphDiv");
  console.log(dict_t2e)
  console.log(Object.keys(dict_t2e))
  console.log(Object.values(dict_t2e))
  var data = [{
      values: Object.values(dict_t2e),
      labels: Object.keys(dict_t2e),
      type: 'pie'
  }];
  var layout = {
      height: 400,
      width: 500
  };
  Plotly.newPlot('pieChart', data, layout);
}

function plotPieChartJs() {
  var moodScores = getLatestEntryMoodScores();
  console.log(moodScores)
  moodScores.then(function(result) {
    console.log(result)
    pieChart(result)
  })
  // var moodScores = {'happy': 0.2, 'sad': 0.5, 'fear': 0.3}
  // pieChart(moodScores);
}


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