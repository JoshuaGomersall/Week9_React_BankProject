import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,NavLink} from "react-router-dom";
import './App.css';
import Login from './Login';
import Loggedin from './LoggedIn';
import PrizeDraw from './PrizeDraw';

function RoutingExample() {

  return (
    <Router>
      <div className="grid-container">
          <div className="item1">
          </div>

        <Route exact path="/Login" component={Login} />
        <Route exact path="/Loggedin" component={Loggedin} />
        <Route exact path="/PrizeDraw" component={PrizeDraw} />

      </div>
    </Router>
  );
}

class RefExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Initial data...'
    }
    this.updateState = (e) => {
      e.preventDefault();
      this.setState({
        data: e.target.value
      });
    }
    this.clearInput = (e) => {
      e.preventDefault();
      this.setState({
        data: ""
      });
      this.textInput.focus();
    }
  }
  render() {
    return (
      <form>
        <input type="text" value={this.state.data} onChange={this.updateState} ref={(input) => this.textInput = input} />
        <h4>{this.state.data}</h4>
        <button onClick={this.clearInput}>
          CLEAR
          </button>
      </form>
    );
  }
}

export default RoutingExample;