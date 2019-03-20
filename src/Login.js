import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import Loggedin from './LoggedIn';
import validator from 'validator';
import isAlpha from 'validator';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forename: '',
      surname: '',
      login: 1,
      loggedin: 0,
    }

    this.changeToLoggedinPage = (e) => {
      if (validator.isAlpha(this.state.forename) == false) {
        document.getElementById('errormessage').innerHTML="Invalid Forename";
        return '0';
      }
      if (validator.isAlpha(this.state.surname) == false) {
        document.getElementById('errormessage').innerHTML="Invalid Surname";
        return '0';
      }
      this.setState({
        login: 0,
        loggedin: 1
      });
    }



    this.setforename = (e) => {
      this.setState({
        forename: e.target.value
      });
    }

    this.setsurname = (e) => {
      this.setState({
        surname: e.target.value
      });
    }
  }


  render() {
    return (
      <header className="App-header">
        <div className="container">
          <div className={'loginpage' + this.state.login}>
            <div>
              <p>Forename</p>
              <input placeholder='John' id="forename" onChange={this.setforename} type="text" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" ></input>

              <p>Surname</p>
              <input placeholder='Simons' id="surname" onChange={this.setsurname} type="text" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"></input>
            </div>

            <br></br>

              <p id='errormessage'></p>

            <br></br>
            <button onClick={this.changeToLoggedinPage}> Create</button>
          </div>

          <div className={'loggedinpage' + this.state.loggedin}>
            <Loggedin forename={this.state.forename} surname={this.state.surname} accountNumber={this.state.accountNumber} />
          </div>
        </div>
      </header>
    );
  }
}

export default Login;