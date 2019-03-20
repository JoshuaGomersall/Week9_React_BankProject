import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import Loggedin from './LoggedIn';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      forename: 'Charlie',
      surname: 'Chaplin',
      accountNumber: 'A423TEST',
      login: 1,
      loggedin: 0,
    }


    this.validation = (e) => {
      if (document.getElementById('forename').Text == 'p') {
        console.log("Blank")
        console.log(document.getElementById('forename').textContent)
        return;
      }
      else {
        console.log(document.getElementById('forename').textContent)
      }
    }


    this.changeToLoggedinPage = (e) => {
      console.log(document.getElementById('forename').value);
      if (document.getElementById('forename').value == '') {
        console.log(document.getElementById('forename').value);
        alert('Forename Missing');
        return '0';
      }
      else if (document.getElementById('surname').value == '') {
        console.log(document.getElementById('forename').value);
        alert('Surname Missing');
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
      <div className="App">
        <header className="App-header">
          <div className={'loginpage' + this.state.login}>
            <div>
              <p>Forename</p>
              <input placeholder='John' id="forename" onChange={this.setforename}></input>

              <p>Surname</p>
              <input placeholder='Simons' id="surname" onChange={this.setsurname}></input>
            </div>

            <br></br>
            <br></br>

            <br></br>
            <button onClick={this.changeToLoggedinPage} > Create</button>
          </div>

          <div className={'loggedinpage' + this.state.loggedin}>
            <Loggedin forename={this.state.forename} surname={this.state.surname} accountNumber={this.state.accountNumber} />
          </div>

        </header>
      </div>
    );
  }
}

export default Login;
