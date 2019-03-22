import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Login from './Login';
import Loggedin from './LoggedIn';
import PrizeDraw from './PrizeDraw';

function RoutingExample() {

  return (
    <Router>
      
      <h1>
        ROYAL BANK OF QA</h1>
      <div>

        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Loggedin"  component={Loggedin} /> 

        {/* render={()=><Loggedin forename={this.state.forename} surname={this.state.surname} />}/> */}

        <Route exact path="/PrizeDraw" component={PrizeDraw} />

      </div>
    </Router>
  );
}

export default RoutingExample;