import React, { Component } from 'react';
import './App.css';

class PrizeDraw extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }

    this.changeToLogin = (e) => {
      window.history.go(0);
    }
  }

  componentDidMount() {
    let reward = this.props.reward;
    console.log('Result Start');
    if (reward > 0) {
      document.getElementById('rewardtext').innerHTML = 'You Have Won!  £ ' + this.props.reward;
    }
    else {
      document.getElementById('rewardtext').innerHTML = 'Unfortunately on this occasion you have not won a prize';
    }
  }

  render() {
    return (
        <div>
          <p id='rewardtext'>
          </p>
          <br></br>

          <button onClick={this.changeToLogin}> Log Out</button>
          <br></br>
      </div>
    );
  }
}

export default PrizeDraw;