import React from "react";
import {Grid, Divider} from '@mui/material'
import MoodResources from "../components/MoodResources";
import graph_1 from '../imgs/graph_1.png';
import graph_2 from '../imgs/graph_2.png';
import {getAllMoodScores} from '../firebase'
import Plotly from 'plotly.js-dist'
import { useParams } from 'react-router-dom'

function Analysis() {
  // const { title } = useParams();
  return (
      <div>
        <head>
          <script src='./AnalysisIndividualCharts.js'></script>
          </head>
        Overall Mood Score
        {console.log('pie chart created')}
      <body>
        <div id='pieChartAvg'>
          {plotPieChartJs()}
          <script>

          </script>
          </div>
        </body>
      </div>
    );

} export default Analysis;

function pieChart(dict_t2e) {
console.log(dict_t2e)
console.log(Object.keys(dict_t2e))
console.log(Object.values(dict_t2e))
var values = Object.values(dict_t2e)
var y1 = []
values.forEach(function(value) {
  value *= 100
  y1.push(value)
})
var data = [{
    x: Object.keys(dict_t2e),
    y: y1,
    marker: {color: ['rgba(222,45,38,0.8)', 'rgb(26, 118, 255)', 
                     'rgb(82,212,82)', 'rgb(254,222,0)', 'rgb(154,70,61)']},
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
moodScores.then(function(result) {
  console.log(result)
  pieChart(result)
})
}


// return (
//   <div>
//     <Grid container style={{margin: '5rem'}}>
//       <Grid item xs={10}>
//           <h1 
//             style={{
//               marginTop: "5rem"
//             }}>
//               Mood Analysis Board
//           </h1>
//           <Divider style={{width: "50rem"}}/>
//           <Grid container item>
//             <Grid item>
//               <img style={{width: 400, marginTop: 40}} src={graph_1} alt="graph_1" />
//             </Grid>
//             <Grid item>
//               <img style={{width: 400, marginTop: 40, marginLeft: 15}} src={graph_2} alt="graph_2" />
//             </Grid>
//           </Grid>
//         </Grid>
//     </Grid>
//     <MoodResources />
//   </div>
// );