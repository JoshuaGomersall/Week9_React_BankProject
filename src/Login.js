import React, { Component } from 'react';
import './App.css';
import {Route,BrowserRouter, Link,Switch} from 'react-router-dom';
import axios from 'axios';
import Loggedin from './LoggedIn';

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
          forename : 'Charlie',
          surname : 'Chaplin',
    }


    this.validation = (e) => {
      if (document.getElementById('forename').Text == 'p') {
        console.log("Blank")
        console.log(document.getElementById('forename').textContent)
        return;
      }
      else
      {
          console.log(document.getElementById('forename').textContent)
      }
    }
  }

  // this.setforename = (e) =>{
  //   this.Forename = 'Test'
  // }
  
  // this.setsurname = (e) =>{
  //   this.Surname = 'Test'
  // }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
      <div>
		  <p>Forename</p>
		  <input placeholder='John' id="forename" onChange={this.setforename}></input>

      <p>Surname</p>
		  <input placeholder='Simons' id="surname" onChange={this.setsurname}></input>
      </div>

      <br></br>
      <br></br>
		  <p>Password</p>
		  <input type={Text} placeholder='Password1'  id="password"></input>

		  <br></br>
		  <div>
      
      <button><Link to='/Loggedin' test={this.state.forename} forename={this.state.forename} surname={this.state.surname}>Create</Link></button> 
      <button><Link to='/Loggedin'> Login </Link></button>
		  </div>

        </header>
      </div>
    );
  }
}

export default Login;
