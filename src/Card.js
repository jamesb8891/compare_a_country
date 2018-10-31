import React, { Component } from "react";
import "./Card.scss";
import close from "./images/close.png";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFirstSide: true
    };
  }

  deleteCard = event => {
    event.preventDefault();
    this.props.deleteCard(this);
  };

  showFirstSide = () => {
    if (this.state.showFirstSide) {
      this.setState({
        showFirstSide: false
      });
    } else {
      this.setState({
        showFirstSide: true
      });
    }
  };

  render() {
    let { country, continent } = this.props;
    return (
      <div className="card">
        <header className="card-header">
          <div className="country-info">
            <h1 className="country-name">{country.name}</h1>
            <p className="continent-name">{continent.name}</p>
          </div>
          <input
            className="delete-button"
            type="image"
            src={close}
            onClick={this.deleteCard}
          />
        </header>
        {this.state.showFirstSide ? (
          <main className="card-stats-container">
            <p className="country-pop">population: {country.population}</p>
            <p className="country-GDP">GDP per capita: {country.GDP}</p>
            <p className="country-area">area: {country.area}</p>
            <p className="country-density">
              pop. density: {country.pop_density}
            </p>
            <button className="show-more-stats" onClick={this.showFirstSide}>
              {" "}
              ...show more stats{" "}
            </button>
          </main>
        ) : (
          <main className="card-stats-container">
            <p className="country-pop">
              infant mortality: {country.infant_mortality}
            </p>
            <p className="country-GDP">
              literacy rate: {country.percent_literate}%
            </p>
            <p className="country-area">birth-rate: {country.birthrate}</p>
            <p className="country-density">death-rate: {country.deathrate}</p>
            <button className="show-more-stats" onClick={this.showFirstSide}>
              {" "}
              ...show more stats{" "}
            </button>
          </main>
        )}
      </div>
    );
  }
}

export default Card;
