import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import JournalDashboard from './pages/JournalDashboard.js';
import NavBar from './components/Navbar.js';
import JournalEdit from './pages/JournalEdit';
import Profile from './pages/Profile.js';
import Library from './pages/Library.js';
import Analysis from './pages/Analysis.js';
import Faq from './pages/Faq.js';
import Logout from './pages/Logout';

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