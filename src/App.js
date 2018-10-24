import React, { Component } from 'react';
import './App.css';
import Filter from './Filter.js';
import Search from './Search.js';
import List from './List.js';
import Card from './Card.js';

class App extends Component {  
  constructor() {
    super(); 
    this.state = {
      countryData: []
    }
  } 
    componentDidMount = () => {
      fetch('http://whateverly-datasets.herokuapp.com/api/v1/countries')
        .then(response => response.json())
        .then(countries => {
          this.setState({
            countryData: countries
          })
        })
        .catch(error => console.log(error))
        console.log(this.state.countryData)
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search />
          <Filter />
        </header>
        <main className = "App-main">
          <List className="list-container" />
          {/*Added multiple card components just so we can observe what they will look like on the dom*/}
          {/* <Card className="card" />
          <Card className="card" />
          <Card className="card" /> */}
        </main>
      </div>
    )
  }
}

export default App;