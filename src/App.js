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
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/404Error/ErrorPage';

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
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/service'>
            <Services></Services>
          </Route>
          <Route exact path='/contact'>
            <Contact></Contact>
          </Route>
          <Route exact path='*'>
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
