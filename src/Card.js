import React, { Component } from 'react';
import './Card.scss';
import canada from './images/canada.png';
import star from './images/star.png';
import close from './images/close.png';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  deleteCard = (event) => {
    event.preventDefault();
    this.props.deleteCard(this);
  }

  render() {
    let {country, continent} = this.props
    return (
      <div className ="card">
        <header className="card-header">
          <input className="star-button" type="image" src={star} />
          <div className="country-info">
            <h1 className = "country-name">
            {country.name}
            </h1>
            <p className = "continent-name">
            {continent.name}
            </p>
          </div>
          <input className = "delete-button" type="image" src={close} onClick={this.deleteCard} /> 
        </header>
        <main className="card-stats-container">
          <p className="country-pop">
          population: {country.population}
          </p>
          <p className="country-GDP">
          GDP per capita: {country.GDP}
          </p>
          <p className="country-area">
          area: {country.area}
          </p>
          <p className="country-density">
          pop. density: {country.pop_density}
          </p>
        </main>
      </div>
    )
  }
}

export default Card;