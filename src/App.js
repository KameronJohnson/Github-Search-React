import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class Form extends Component {

  state = {
    userName: ''
  };

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
        value={this.state.userName}
        placeholder="Username"
        onChange={event => this.setState({userName: event.target.value})}
        />
        <button type="submit">Search</button>
      </form>
    )
  }

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github Search</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
