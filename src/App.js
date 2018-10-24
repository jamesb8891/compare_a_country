import React, { Component } from 'react';
import './App.css';
import Filter from './Filter.js';
import Search from './Search.js';
import List from './List.js';
import Card from './Card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search />
          <Filter />
        </header>
        <main className = "App-main">
          <List className="list-container" />
          <Card className="card" />
          <Card className="card" />
          <Card className="card" />
        </main>
      </div>
    );
  }
}

export default App;