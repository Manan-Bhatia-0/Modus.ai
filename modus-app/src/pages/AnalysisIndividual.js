import React from "react";
import { useParams } from 'react-router-dom'
import {Grid, Divider} from '@mui/material'
import graph_3 from '../imgs/graph_3.png';
import {getCurrentEntryMoodScores } from "../firebase";
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
          Mood Scores
          {console.log('pie chart created')}
        <body>
          <div id='pieChart'>
            {plotPieChartJs(title)}
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
      marker: {colors: ['rgba(222,45,38,0.8)', 'rgb(26, 118, 255)', 
                     'rgb(82,212,82)', 'rgb(254,222,0)', 'rgb(154,70,61)']},
      type: 'pie'
  }];
  var layout = {
      height: 800,
      width: 1000
  };
  Plotly.newPlot('pieChart', data, layout);
}

function plotPieChartJs(title) {
  var moodScores = getCurrentEntryMoodScores(title);
  console.log(moodScores)
  moodScores.then(function(result) {
    console.log(result)
    pieChart(result)
  })
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