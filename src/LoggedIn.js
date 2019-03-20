import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import Prizedraw from './PrizeDraw';
import axios from axios;

class Loggedin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accountNumber: 'A4464346534',
      reward: '67',
      loggedin: 1,
      prizedraw: 0,
    }

    this.changeToPrizeDrawPage = (e) => {
      console.log('TEST')
      this.setState({
        loggedin: 0,
        prizedraw: 1,
      });
    }
  }

  componentDidMount() {
    this.getone = (e) => {
      axios.get('http').then(response => {
        console.log(response.data);
        this.setState({
      accountNumber : '',
      });
        let wordnice = JSON.stringify(response.data);
        wordnice = wordnice.replace('['," ");
        wordnice = wordnice.replace(']'," ");
        wordnice = wordnice.replace(/{/g," <divdis>");
        wordnice = wordnice.replace(/}/g," </divdis> </br>");
        wordnice = wordnice.replace(/\"/g, "");
        wordnice = wordnice.replace(/,/g,"<br/>");
        
        document.getElementById('testid').innerHTML =  wordnice;
      });
    }
  }

render() {
  return (
    <div className="App">
      <header className="App-header">

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

      </header>
    </div>
  );
}
}

export default Loggedin;