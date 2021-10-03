import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Hero></Hero>
          </Route>
          <Route exact path='/home'>
            <Hero></Hero>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
