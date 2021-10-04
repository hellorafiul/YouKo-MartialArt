import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import HomePageService from './components/HomepageService/HomePageService';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Hero></Hero>
            <HomePageService></HomePageService>
          </Route>
          <Route exact path='/home'>
            <Hero></Hero>
            <HomePageService></HomePageService>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
