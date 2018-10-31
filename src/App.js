import React, { Component } from "react";
import "./App.scss";
import Filter from "./Filter.js";
import Search from "./Search.js";
import Card from "./Card.js";
import CardContainer from "./CardContainer.js";
import globe from "./images/globe.gif";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countryData: [],
      continentData: [],
      countryInput: "",
      displayCards: [],
      countriesMatchingFilter: [],
      showPopup: true,
      navigation: [
        {
          id: 0,
          title: "Population",
          selected: false,
          key: "navigation"
        },
        {
          id: 1,
          title: "GDP",
          selected: false,
          key: "navigation"
        },
        {
          id: 2,
          title: "Continent",
          selected: false,
          key: "navigation"
        }
      ]
    };
  }
  componentDidMount = () => {
    this.getCountryData();
    this.getContinentData();
  };

  getCountryData = () => {
    fetch("http://whateverly-datasets.herokuapp.com/api/v1/countries")
      .then(response => response.json())
      .then(countries => {
        this.setState({
          countryData: countries
        });
      })
      .catch(error => console.log(error));
  };

  getContinentData = () => {
    fetch("http://whateverly-datasets.herokuapp.com/api/v1/continents")
      .then(response => response.json())
      .then(continents => {
        this.setState({
          continentData: continents
        });
      })
      .catch(error => console.log(error));
  };

  hidePopup = event => {
    event.preventDefault();
    this.setState({
      showPopup: false
    });
  };

  updateCountryInput = countryName => {
    this.setState({
      countryInput: countryName
    });
  };

  findCountry = countryName => {
    let chosenCountryObj = this.state.countryData.countries.find(country => {
      return country.name.toLowerCase() === countryName;
    });
    if (!this.state.displayCards.includes(chosenCountryObj)) {
      this.setState({
        displayCards: [...this.state.displayCards, chosenCountryObj]
      });
    }
  };

  alertUser = () => {
    console.log("That is not a country!");
  };

  deleteCard = deletedCard => {
    const updatedCards = this.state.displayCards.filter(
      item => item !== deletedCard.props.country
    );
    this.setState({
      displayCards: updatedCards
    });
  };

  displayFilteredCountries = countries => {
    this.setState({
      countriesMatchingFilter: { countries }
    });
  };

  deleteAllCards = () => {
    this.setState({
      displayCards: []
    });
  };

  filterByContinent = event => {
    event.preventDefault();
    let chosenContinent = event.target.name;
    let countriesArr = this.state.continentData.continents.find(continent => {
      if (continent.name === chosenContinent) {
        return continent.countries;
      }
    });
    let countriesMatchingFilter = countriesArr.countries;
    this.setState({
      countriesMatchingFilter: countriesMatchingFilter
    });
  };

  render() {
    if (this.state.displayCards.length === 0) {
      return (
        <div className="App">
          {this.state.showPopup ? (
            <div className="popup">
              <h1> NATION NAVIGATION </h1>
              <img src={globe} />
              search for a country! or filter by population or GDP
              <button className="hide-popup-button" onClick={this.hidePopup}>
                {" "}
                start exploring!{" "}
              </button>
            </div>
          ) : null}
          <header className="App-header">
            <Search
              countryData={this.state.countryData}
              continentData={this.state.continentData}
              updateCountryInput={this.updateCountryInput}
              findCountry={this.findCountry}
            />
            <Filter
              items={this.state.navigation}
              continentData={this.state.continentData}
              countryData={this.state.countryData}
              displayFilteredCountries={this.displayFilteredCountries}
              filterByContinent={this.filterByContinent}
              countriesMatchingFilter={this.state.countriesMatchingFilter}
              filteredCountries={this.state.countriesMatchingFilter}
            />
          </header>
          <main className="App-main" />
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Search
              countryData={this.state.countryData}
              continentData={this.state.continentData}
              updateCountryInput={this.updateCountryInput}
              findCountry={this.findCountry}
              clearAllCountries={this.deleteAllCards}
              countriesMatchingFilter={this.state.countriesMatchingFilter}
            />
            <Filter
              items={this.state.navigation}
              continentData={this.state.continentData}
              countryData={this.state.countryData}
              displayFilteredCountries={this.displayFilteredCountries}
              filterByContinent={this.filterByContinent}
              filteredCountries={this.state.countriesMatchingFilter}
            />
          </header>
          <main className="App-main">
            <CardContainer
              className="card-container"
              displayCards={this.state.displayCards}
              continentData={this.state.continentData}
              deleteCard={this.deleteCard}
              alertUser={this.alertUser}
            />
          </main>
        </div>
      );
    }
  }
}

export default App;
