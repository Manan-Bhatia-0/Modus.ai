/* eslint-disable */
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./modus.css";
import clouds from './dashboard-img.png'
import { getUserName, getTopThreeLatestEntries } from "../firebase";
import LibraryCard from "../components/LibraryCard";
import { Button, Grid, Divider, Pagination, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";
import StarAnimation from "./StarLogout";

const useStyles = makeStyles({
  root: {
    maxWidth: '60rem'
  },
})

function JournalDashboard() {
  const classes = useStyles();
  var [entries, setEntries] = React.useState(null);

  useEffect(() => {
    const promise = getTopThreeLatestEntries();
    promise.then(function (result) {
      setEntries(result);
    })
  },
    []);
  return (
    <Grid container
      direction="column">
      <Grid item>
        <div className="dashboard">
          <div>
            {StarAnimation()}
            <img src={clouds} alt="Logo" width="100%" height="40%" />
            <Link to='/write'>
            <button class="writeButton">
              Write New Entry
            </button>
            </Link>
          </div>
          <div class="centered">
            <h1>
              Hello {getUserName()}, <br></br> &emsp; &emsp; how are you doing?
            </h1>
          </div>
        </div>
      </Grid>
      <Grid item>
        <div class="entries">
          <div
            className={classes.root}
            style={{ margin: "5rem" }}
          >
            <h1
              style={{
                marginTop: "5rem",
                fontSize: 32
              }}>
              Most Recent Entries
            </h1>
            <Grid container direction="row" style={{marginTop: "2rem"}} spacing={0.1}>
        <Grid container item>
          {entries && entries.map((entry) => {
              return (<LibraryCard key={entry.title} entry={entry}/>)
          })}
        </Grid>
        <Grid container item justifyContent="center">
    
        </Grid>
      </Grid>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
export default JournalDashboard;







// function JournalDashboard() {


//   return (

//     <div
//       className={classes.root}
//       style={{margin: "5rem"}}
//     > 
//   <Grid
//     container
//     direction="column"
//   >
//     <Grid item>
//       <div className="dashboard">
//         {/* <img src={clouds} alt="Logo" width="87%" height="50%" /> */}
//         <img src={clouds} alt="Logo" width="87%" height="50%" />
//         <div class="centered">
//           <h1>
//             Hello {getUserName()}, <br></br> &emsp; &emsp; how are you doing?
//             </h1>
//             </div>
//       </div>
//     </Grid>
//       <Grid container item justifyContent="space-between">
//       <Grid item xs={10} style={{
//             marginTop: "5rem"
//           }}
//         >
//         </Grid>
//         <Grid item xs={5}>

//         </Grid>
//       </Grid>

//       <Divider style={{width: "65rem"}}/>
//       <Grid container direction="column" style={{marginTop: "2rem"}}>
//         <Grid container item>
//           {entries && entries.map((entry) => {
//               return (<LibraryCard key={entry.title} entry={entry}/>)
//           })}
//         </Grid>
//         <Grid container item justifyContent="center">
//           <Pagination count={1} />
//         </Grid>
//       </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default JournalDashboard;



