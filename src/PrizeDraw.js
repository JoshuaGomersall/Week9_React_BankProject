import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,BrowserRouter,Link,Switch} from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
          data : '',
          reward : '500',
    }
}

componentDidMount()
{
  let win = true;
  console.log('Result Start');
  if (win == true)
  {
      document.getElementById('rewardtext').innerHTML =  'You Win! £ ' + this.state.reward;
    }
    if (win == false)
  {
      document.getElementById('rewardtext').innerHTML =  'You Lose Sorry';
    }
}

deleteRequest = () => {
  console.log ("START DELETE");
  alert("Deleting Character");
  axios.delete('http://35.189.101.154:8888/individual_Project/api/Player/deletePlayer/' + this.state.CharacterName).then(response => {
    console.log(response.data);
    console.log("Done");
     alert("Character Deleted");
    });
  };


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

		  <p id='rewardtext'>
      </p>
      <br></br>

      <button><a href="localhost:3000/loggedin"> Log Out </a> </button> 
      <br></br>
      <button onClick={this.deleteRequest}> Delete Account </button>
        </header>
      </div>
    );
  }
}

export default App;
