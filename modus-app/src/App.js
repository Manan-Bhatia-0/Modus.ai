/* eslint-disable */ 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Grid from "@mui/material/Grid";

import JournalDashboard from "./pages/JournalDashboard.js";
import NavBar from "./components/Navbar.js";
import JournalEdit from "./pages/JournalEdit";
import Profile from "./pages/Profile.js";
import Library from "./pages/Library.js";
import Analysis from "./pages/Analysis.js";
import Faq from "./pages/Faq.js";
import Login from "./pages/Login.js";
import CreateAccount from "./pages/CreateAccount.js";
import Reset from "./pages/ResetPassword.js";
import AnalysisIndividual from './pages/AnalysisIndividual.js';
import Logout from "./pages/Logout";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SingleJournal from "./pages/SingleJournal.js";

// firebase.initializeApp({
//   apiKey: "AIzaSyDXtGR1FNQz9zxOk79Ikkqzg9j8IYi2mh0",
//   authDomain: "modusdb-4d7ed.firebaseapp.com",
//   projectId: "modusdb-4d7ed",
//   storageBucket: "modusdb-4d7ed.appspot.com",
//   messagingSenderId: "738850813503",
//   appId: "1:738850813503:web:e7e97619a1eaa6510daa8a",
//   measurementId: "G-84F8J1Y1VY",
// });

// const auth = firebase.auth();
// const firestore = firebase.firestore();
// const analytics = firebase.analytics;

var admin = require("firebase-admin");
var serviceAccount = require("./modusdb-4d7ed-firebase-adminsdk-nkovy-a64f42c83d.json");


// How is the first page displayed?
// can we check user auth first and then
// either display login page or display
// welcome dashboard.

// Please edit the buttons accordingly.


const LoginContainer = () => (
  <div className="container">
    <Grid item>
      <Route exact path="/" component={Login} />
    </Grid>
  </div>
);

const ResetContainer = () => (
  <div className="container">
    <Grid item>
      <Route exact path="/reset" component={Reset} />
    </Grid>
  </div>
);

const CreateContainer = () => (
  <div className="container">
    <Grid item>
      <Route exact path="/register" component={CreateAccount} />
    </Grid>
  </div>
);

const DefaultContainer = () => (
  <Grid container spacing={2}>
      <Grid item>
        <NavBar />
      </Grid>
      <Grid item style={{display: "flex"}}>
        <Route path="/home" exact component={JournalDashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/write" component={JournalEdit} />
        <Route path="/library" component={Library} />
        <Route path="/analysis" component={Analysis} />
        <Route path="/faq" component={Faq}></Route>
        <Route path='/individual' component={AnalysisIndividual} />
        <Route path="/journal/:title"> <SingleJournal /> </Route>
      </Grid>
  </Grid>
);

function Welcome() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/register" component={CreateContainer} />
        <Route exact path="/reset" component={ResetContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </Router>
  );
}


export default Welcome;

function save_journal() {
  //var func = JournalEdit
  //str func.entryContent
  //str.db
}

// // connect this to logout page.
// export function SignOut() {
//   return auth.currentUser && (auth.signOut())
//     // <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
// }
// export default App;
