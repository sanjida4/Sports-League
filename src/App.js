import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/id/:idLeague'>
          <LeagueDetail/>
        </Route>
        <Route path='*'>
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
