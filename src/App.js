import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()
        .then(users => this.setState({ monsters: users })))
  }

  render() {
    return (
      <div className="App">
        <input type='search'
          placeholder='search monster'
          onChange={e =>
            this.setState({ searchField: e.target.value })} />
        <CardList monsters={this.state.monsters}>
          {/* <h1>Pawornwan</h1> this is children prop */}
        </CardList>
      </div >
    )
  }
}


export default App;
