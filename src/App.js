import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import SearchForm from './Components/SearchForm';
import UserInfo from './Components/UserInfo';

require('typeface-raleway');

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: '', 
      repos: {},
      gists: {}
    }
  }

  performSearch = (query) => {
    Promise.all([
      axios.get(`https://api.github.com/users/${query}`),
      axios.get(`https://api.github.com/users/${query}/repos?per_page=100`),
      axios.get(`https://api.github.com/users/${query}/gists?per_page=100`)
    ])
    .then(([userResponse, reposResponse, gistsResponse]) => {
        this.setState({user: userResponse.data, 
                      repos: reposResponse.data,
                      gists: gistsResponse.data
        });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });    
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Github Search</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>  
        <div className="main-content">
          <UserInfo user={this.state.user} 
                    repos={this.state.repos} 
                    gists={this.state.gists}
          />
        </div>
      </div>
    );
  }
}

export default App;
