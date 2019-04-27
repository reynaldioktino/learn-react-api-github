import React, { Component } from 'react';
import axios from "axios";

import InputSubmit from './component/InputSubmit';
import CardList from "./component/CardList";

class App extends Component {

  state = {
    repos: []
  }

  getRepos(value) {
    axios
      .get(`https://api.github.com/search/repositories?q=${value}`)
      .then(response => this.setState({ repos: response.data.items }))
      .catch(error => console.log(error))
  }

  render() {
  return (
      <div>
        <InputSubmit 
        placeholder="Enter Repo Name" 
        buttonText="Search"
        onSubmit={value => this.getRepos(value)} />

        <CardList repos={this.state.repos} />
      </div>
    );
  }
  
}

export default App;
