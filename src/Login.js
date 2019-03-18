import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter,Link,Switch} from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
		  
      <h1>
        ROYAL BANK OF QA
        </h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <div>
		  <p>Forename</p>
		  <input id="username" ></input>

      <p>Surname</p>
		  <input id="username" ></input>
      </div>


      <br></br>
      <br></br>
		  <p>Password</p>
		  <input id="password"></input>

		  <br></br>
		  <div>
		  <button><a href="localhost:3000/loggedin"> Submit </a> </button> 
      <button><a href="localhost:3000/loggedin"> Login </a></button>
		  </div>
		  
        </header>
      </div>
    );
  }
}

export default App;
