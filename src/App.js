import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Loggedin from './LoggedIn';
import PrizeDrawWin from './PrizeDrawWin'

import {Route,BrowserRouter,Link,Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <PrizeDrawWin/>

    );
  }
}

export default App;
