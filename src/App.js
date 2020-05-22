import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    allUserNames: [],
    currentUserName: ""
  }

  takeUserInput = (event) => {
    this.setState({
      currentUserName: event.target.value
    })
  }

  addUser = () => {
    this.setState({
      allUserNames: [...this.state.allUserNames, this.state.currentUserName],
      currentUserName: ""
    })
  }

  render() {
    const displayUserNames = this.state.allUserNames.map((user, index) => {
      return <p key={index}>{user}</p>
    })
    return (
      <div className="App" >
        {displayUserNames}
        <input onChange={this.takeUserInput} value={this.state.currentUserName} />
        <button onClick={this.addUser}>Submit your user</button>
      </div>
    );
  }
}

export default App;
