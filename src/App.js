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
        <header className="app-header">
          <Filter />
          <Search />
        </header>
        <main>
          <List className="country-list-container" />
          <Card className="country-card-container" />
        </main>
      </div>
    );
  }
}

export default App;