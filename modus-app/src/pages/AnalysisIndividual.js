import React from "react";
import { useParams } from 'react-router-dom'
import {Grid} from '@mui/material'
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