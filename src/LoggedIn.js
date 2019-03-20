import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import Prizedraw from './PrizeDraw';
import axios from 'axios';

class Loggedin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accountNumber: 'A123456',
      reward: '0',
      loggedin: 1,
      prizedraw: 0,
    }


    this.changeToPrizeDrawPage = (e) => {
      axios.post(`http://localhost:8081/template/prizes`, {
         "playerName": this.state.accountNumber})
      .then(response => {
        console.log(response.data);
        });
      this.setState({
        loggedin: 0,
        prizedraw: 1,
      });
    }
  }

  componentDidMount() {
    this.get = (e) => {
      axios.get('http://localhost:8081/template/generateNumber').then(response => {
        console.log(response.data);
        this.setState({
      accountNumber : e.response.data,
      });
      });
    }
  }

render() {
  return (
    <div className="App">

        <div className={'loggedinpage' + this.state.loggedin}>
          <p>Welcome {this.props.forename + ' ' + this.props.surname} Your Account has just been succesfully created
      </p>
          <div>
            <p>Account Code</p>

            <label for="accountNumber">{this.state.accountNumber}</label>
          </div>

          <br></br>

          <button onClick={this.changeToPrizeDrawPage}>Confirm</button>
        </div>

        <div className={'prizedrawpage' + this.state.prizedraw}>
          <Prizedraw reward={this.state.reward} />
        </div>

    </div>
  );
}
}

export default Loggedin;