import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import Prizedraw from './PrizeDraw';
import axios from 'axios';

class Loggedin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reward: '0',
      loggedin: 1,
      prizedraw: 0,
    }


    this.changeToPrizeDrawPage = (e) => {
      axios.post(`http://35.204.181.223:8081/template/createAccount`,
        {
          "foreName": this.props.forename,
          "familyName": this.props.surname,
          "accNumber": this.props.accountNumber
        })
        .then(response => {
          console.log(response.data);
        });


      axios.post(`http://35.204.181.223:8081/template/prizes`, {
        "accNumber": this.state.accountNumber
      })
        .then(response => {
          console.log(response.data);
        });
      this.setState({
        loggedin: 0,
        prizedraw: 1,
      });
    }
  }

  render() {
    return (
      <div>
        <div className={'loggedinpage' + this.state.loggedin}>
          <p>Welcome {this.props.forename + ' ' + this.props.surname} your Account has just been succesfully created
      </p>
          <div>
            <p>Account Code</p>

            <label for="accountNumber">{this.props.accountNumber}</label>
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