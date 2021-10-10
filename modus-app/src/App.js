import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import JournalDashboard from './JournalDashboard.js';
import NavBar from './Navbar.js';
import JournalEdit from './JournalEdit';
import Profile from './Profile.js';
import Library from './Library.js';
import Analysis from './Analysis.js';
import Faq from './Faq.js';
import Logout from './Logout';

function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
            <Route path='/' exact component={JournalDashboard} />
            <Route path='/profile' component={Profile} />
            <Route path='/write' component={JournalEdit} />
            <Route path='/library' component={Library} />
            <Route path='/anaylsis' component={Analysis} />
            <Route path='/faq' component={Faq} />
            <Route path='/logout' component={Logout} />
            
        </Switch>
    </Router>
  );
}

export default App;