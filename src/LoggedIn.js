import React, { Component } from 'react';
import './App.css';
import {Route,BrowserRouter,Link,Switch} from 'react-router-dom';

class Loggedin extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
          Forename : 'Charlie',
          Surname : 'Chaplin',
          AccountNumber : 'A0121634',
    }
  }

    render() {
    return (
      <div className="App">
        <header className="App-header">

		  <p>Welcome {this.state.Forename + ' ' + this.state.Surname} Your account has just been created
      </p>

		  <div>
      <p>Account Code</p>
		  <input readOnly id="AccountNumber" type="text" placeholder={this.state.AccountNumber}></input>
      </div>

      <br></br>
      
      <button><Link to="/PrizeDraw"> Confirm </Link></button>

        </header>
      </div>
    );
  }
}

export default Loggedin;