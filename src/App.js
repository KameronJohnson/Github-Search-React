import React, { Component } from 'react';
import axios from "axios";
import './App.css';

const UserCard = props => {
  
    return (
      <div>
        <img className="user-card-img" 
        src={props.avatar_url} 
        alt={`Github image of ${props.name}`}/>
        <p>{props.name}</p>
      </div>
    )
  
  }
  
const UserCardList = props => {

  return (
    <div>
      {
        props.userCards.map(userCard => 
          <UserCard key={userCard.name} {...userCard} />
        )
      }
    </div>
  )

}

class Form extends Component {

  state = {
    userName: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(response => {
        this.props.onSubmit(response.data);
        //clear username
        this.setState({ userName: ''});
      });
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

  state = {
    userCards: []
  }

  addNewUserCard = userCardInfo => {
    this.setState(prevState => ({
      userCards: prevState.userCards.concat(userCardInfo)
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github Search</h1>
        </header>
        <Form onSubmit={this.addNewUserCard}/>
        <UserCardList userCards={this.state.userCards}/>
      </div>
    );
  }
}

export default App;
