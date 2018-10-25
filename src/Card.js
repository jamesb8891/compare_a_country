import React, { Component } from 'react';
import './Card.css';
import canada from './images/canada.png';
import star from './images/star.png';
import close from './images/close.png';

class Card extends Component {
    render() {
    return (
      <div className ="card">
        <header className="card-header">
          <input className="star-button" type="image" src={star} />
          <div className="country-info">
            <h1 className = "country-name">
            {this.props.country.name}
            </h1>
            <p className = "continent-name">
            continent
            </p>
          </div>
          <input className = "delete-button" type="image" src={close} /> 
        </header>
        <main className="card-stats-container">
          <p className="country-pop">
          population: {this.props.country.population}
          </p>
          <p className="country-GDP">
          GDP per capita: {this.props.country.GDP}
          </p>
          <p className="country-area">
          area: {this.props.country.area}
          </p>
          <p className="country-density">
          pop. density: {this.props.country.pop_density}
          </p>
        </main>
      </div>
    )
  }
}

export default Card;