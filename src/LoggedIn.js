import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter,Link,Switch} from 'react-router-dom';

class App extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
            Forename : 'John',
            Surname : 'Simons',
      }
  }
  
  
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
      <br></br>
      <br></br>
      

		  <p>Welcome {this.state.Forename + ' ' + this.state.Surname} Your account has just been created
      </p>
		  
        </header>
      </div>
    );
  }
}

export default App;
