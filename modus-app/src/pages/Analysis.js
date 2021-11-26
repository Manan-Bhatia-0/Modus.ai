import React from "react";
import { Grid, Divider } from '@mui/material'
import MoodResources from "../components/MoodResources";
import graph_1 from '../imgs/graph_1.png';
import graph_2 from '../imgs/graph_2.png';
import { getAllMoodScores } from '../firebase'
import Plotly from 'plotly.js-dist'
import { useParams } from 'react-router-dom'

function Analysis() {
  // const { title } = useParams();
  // return (
  //     <div>
  //       <head>
  //         <script src='./AnalysisIndividualCharts.js'></script>
  //         </head>
  //       Overall Mood Score
  //       {console.log('pie chart created')}
  //     <body>
  //       <div id='pieChartAvg'>
  //         {plotPieChartJs()}
  //         <script>

  //         </script>
  //         </div>
  //       </body>
  //     </div>
  //   );


  return (
    <div>
      <Grid container style={{ margin: '5rem' }}>
        <Grid item xs={10}>
          <h1
            style={{
              marginTop: "0.5px"
            }}>
            <b> Mood Analysis Board </b>
          </h1>
          <div id='pieChartAvg'>
            {plotPieChartJs()}
          </div>
          <Divider style={{ width: "50rem" }} />
        </Grid>
      </Grid>
      <MoodResources />
    </div>
  );

} export default Analysis;

function pieChart(dict_t2e) {
  console.log(dict_t2e)
  console.log(Object.keys(dict_t2e))
  console.log(Object.values(dict_t2e))
  var values = Object.values(dict_t2e)
  var y1 = []
  values.forEach(function (value) {
    value *= 100
    y1.push(value)
  })
  var data = [{
    x: Object.keys(dict_t2e),
    y: y1,
    marker: {
      color: ['rgb(93, 87, 107)', 'rgb(183, 195, 243)',
        'rgb(180,248,200)', 'rgb(255,244,189)', 'rgb(255,174,188)']
    },
    type: 'bar'
  }];
  var layout = {
    height: 800,
    width: 1000
  };
  Plotly.newPlot('pieChartAvg', data, layout);
}

function plotPieChartJs() {
  var moodScores = getAllMoodScores();
  console.log(moodScores)
  moodScores.then(function (result) {
    console.log(result)
    pieChart(result)
  })
}