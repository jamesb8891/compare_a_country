import React, { Component } from 'react';
import './App.css';
import Filter from './Filter.js';
import Search from './Search.js';
import List from './List.js';
import Card from './Card.js';
import CardContainer from './CardContainer.js';

class App extends Component {  
  constructor() {
    super(); 
    this.state = {
      countryData: [],
      continentData: [],
      countryInput: '', 
      displayCards: [], 
      navigation: [
        {
          id: 0, 
          title: 'Population',
          selected: false, 
          key: 'navigation'
        }, 
        {
          id: 1, 
          title: 'GDP', 
          selected: false, 
          key: 'navigation'
        }, 
        {
          id: 2, 
          title: 'Area', 
          selected: false,
          key: 'nav item'
        }, 
        {
          id: 3, 
          title: 'Climate', 
          selected: false, 
          key: 'navigation'
        }, 
        {
          id: 4, 
          title: 'Continent', 
          selected: false,
          key: 'navigation'
        }
      ]
    }
  } 
    componentDidMount = () => {
        this.getCountryData();
        this.getContinentData();
    }

    getCountryData = () => {
      fetch('http://whateverly-datasets.herokuapp.com/api/v1/countries')
        .then(response => response.json())
        .then(countries => {
          this.setState({
            countryData: countries
          })
        })
        .catch(error => console.log(error))
    }

    getContinentData = () => {
      fetch('http://whateverly-datasets.herokuapp.com/api/v1/continents')
        .then(response => response.json())
        .then(continents => {
          this.setState({
            continentData: continents
          })
        })
        .catch(error => console.log(error))
    }

    updateCountryInput = (countryName) => {
      this.setState({
        countryInput: countryName
      })
    }

    findCountry = (countryName) => {
        let chosenCountryObj = this.state.countryData.countries.find((country) => {
          if (country.name.toLowerCase() === countryName) {
            return country;
          }
        })
        if (!this.state.displayCards.includes(chosenCountryObj)) {
        this.setState({
        displayCards: [...this.state.displayCards, chosenCountryObj]
        }) 
      }
    }

    deleteCard = (deletedCard) => {
      this.setState({
        displayCards: this.state.displayCards.filter(item => item !== deletedCard.props.country)
        })
    }

  render() {
    if (this.state.displayCards.length < 1) {
    return (
      <div className="App">
        <header className="App-header">
          <Search countryData={this.state.countryData} continentData={this.state.continentData} updateCountryInput={this.updateCountryInput} findCountry={this.findCountry}/>
          <Filter items={this.state.navigation}/>
        </header>
        <main className = "App-main">
          <List className="list-container" />
        </main>
      </div>
       )
    } else {
        return (
         <div className="App">
        <header className="App-header">
          <Search countryData={this.state.countryData} continentData={this.state.continentData} updateCountryInput={this.updateCountryInput} findCountry={this.findCountry}/>
          <Filter items={this.state.navigation} continentData={this.state.continentData}/>
        </header>
        <main className = "App-main">
          <List className="list-container" />
          <CardContainer className="card-container" displayCards={this.state.displayCards} continentData={this.state.continentData} deleteCard={this.deleteCard} />
        </main>
      </div> 
      )
    }
  }
}

export default App;