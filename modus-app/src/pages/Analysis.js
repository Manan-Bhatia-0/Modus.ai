import React from "react";
import { Grid, Divider } from '@mui/material'
import MoodResources from "../components/MoodResources";
import {getHappinessScore, getAllMoodScores, getrecommendedMHResources} from '../firebase'
import Plotly from 'plotly.js-dist'
import { useParams } from 'react-router-dom'

function Analysis() {
  
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
          <Divider style={{ width: "60rem" }} />
          <Grid item xs={10}>
          <div id='gaugeChart'>
            {getScore()}
            
          </div>
          <Divider style={{ width: "60rem" }} />
        </Grid>
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
    title: {
      text:'Overall Mood Scores',
      font: {
        family: 'Arial',
        size: 24,
        color: 'darkblue'
      }},
    height: 700,
    width: 1000,
    xaxis: {
      title: {
        text: 'Moods',
        font: {
          family: 'Courier New, monospace',
          size: 22,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Score (%)',
        font: {
          family: 'Courier New, monospace',
          size: 22,
          color: '#7f7f7f'
        }
      }
    }
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

function getScore() {
  var score = getHappinessScore()
  score.then(function (result) {
    console.log(result)
    plotGaugeChart(result * 100)
  })
}

function plotGaugeChart(result) {
  
  var data = [
    {
      type: "indicator",
      mode: "gauge+number+delta",
      value: result,
      title: { text: "Mental Health Progress Score (out of 100)", font: { size: 24 } },
      text: ['Poor', 'OK', 'Excellent'],
      gauge: {
        axis: { range: [null, 100], tickwidth: 1, tickcolor: "#5A7D9F" },
        bar: { color: "#5A7D9F" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          {range: [0, 20], color: 'rgb(255,105,97)'},
          { range: [20, 60], color: "rgb(255,244,189)" },
          { range: [60, 100], color: "rgb(180,248,200)" }
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: 100
        }
      }
    }
  ];
  
  var layout = {
    width: 950,
    height: 800,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: "white",
    font: { color: "darkblue", family: "Arial" }
  };
  
  Plotly.react('gaugeChart', data, layout); 
}