import React, { Component } from 'react';
import './App.css';
import Filter from './Filter.js';
import Search from './Search.js';
import List from './List.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Filter />
          <Search />
        </header>
        <main>
        <List />
        </main>
      </div>
    );
  }
}

export default App;