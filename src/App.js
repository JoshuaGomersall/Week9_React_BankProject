import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Loggedin from './LoggedIn';
import PrizeDraw from './PrizeDraw';
import {Route,BrowserRouter,Link,Switch} from 'react-router-dom';
import { compileFunction } from 'vm';
import RoutingExample from './NavBar';


class App extends Component {

  render() {
    return (
    
      <RoutingExample/>

    );
  }
}

export default App;
