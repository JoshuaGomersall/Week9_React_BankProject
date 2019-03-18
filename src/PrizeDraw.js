import React, { Component } from 'react';
import './App.css';
import {Route,BrowserRouter,Link,Switch} from 'react-router-dom';
import axios from 'axios';

class PrizeDraw extends Component {

  constructor(props) {
    super(props);
    this.state = {
          reward : '500',
    }
}

componentDidMount()
{
  let reward = this.state.reward;
  console.log('Result Start');
  if (reward > 0)
  {
      document.getElementById('rewardtext').innerHTML =  'You Win! £ ' + this.state.reward;
    }
    if (reward <= 0)
  {
      document.getElementById('rewardtext').innerHTML =  'You Lose Sorry';
    }
}

deleteRequest = () => {
  alert("Deleting Character");
  axios.delete('http://35.189.101.154:8888/individual_Project/api/Player/deletePlayer/' + this.state.CharacterName).then(response => {
    console.log(response.data);
     alert("Character Deleted");
    });
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">

		  <p id='rewardtext'>
      </p>
      <br></br>

      <button><Link to='/Login'> Log Out </Link></button> 
      <br></br>
      <button onClick={this.deleteRequest}> <Link to='/Login'> Delete Account </Link></button>
        </header>
      </div>
    );
  }
}

export default PrizeDraw;
