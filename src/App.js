import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import OurServices from './Components/Pages/OurServices/OurServices';
import ServiceDetails from './Components/Pages/ServiceDetails/ServiceDetails';
import Welldone from './Components/Pages/Welldone/Welldone';
import Footer from './Components/Sheared/Footer/Footer';
import NavBar from './Components/Sheared/NavBar/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <OurServices></OurServices>
          </Route>
          <Route exact path="/ServiceDetails/:serviceID">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route exact path="/welldone">
            <Welldone></Welldone>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
