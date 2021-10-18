import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import DoctorProfile from './Components/Pages/DoctorProfile/DoctorProfile';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login';
import NotFound from './Components/Pages/NotFound/NotFound';
import OurDoctors from './Components/Pages/OurDoctors/OurDoctors';
import OurServices from './Components/Pages/OurServices/OurServices';
import Register from './Components/Pages/Register/Register';
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
          <Route exact path="/doctors">
            <OurDoctors></OurDoctors>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/ServiceDetails/:serviceID">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route exact path="/DoctorProfile/:doctorID">
            <DoctorProfile></DoctorProfile>
          </Route>
          <Route exact path="/welldone">
            <Welldone></Welldone>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
