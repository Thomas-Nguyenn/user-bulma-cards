// Import React libraries
import React, { Component } from 'react';

// Import Components
import CardList from './cardList';

// Import CSS
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  state = {
    userData: [],
    title: 'Randos'
  }

  loadData = async () => {
    const response = await fetch('https://randomuser.me/api/?results=2');
    const data = await response.json();
    return data.results;
  }

  handleClick = async () => {
    const newUserData = await this.loadData();

    this.setState({
      userData: newUserData
    })
  }

  async componentDidMount() {
    const userData = await this.loadData();

    this.setState({
      userData: userData
    })
  }

  render() {
    const { title, userData } = this.state;
    return (
      <div className="App">
        <h1>{title}</h1>
        <button onClick={(e) => this.handleClick(e)}>Load New People</button>
        <CardList userData={userData} />
      </div>
    );
  }
}

export default App;