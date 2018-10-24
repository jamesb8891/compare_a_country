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
          { /*<img className="country-flag" src=
          {canada}/> */ }
          <div className="country-info">
            <h1 className = "country-name">
            Canada
            </h1>
            <p className = "continent-name">
            North America
            </p>
          </div>
          <input className = "delete-button" type="image" src={close} />
          
        </header>
        <main className="card-stats-container">
          <p className="country-pop">
          population: 31056997
          </p>
          <p className="country-GDP">
          GDP per capita: $400
          </p>
          <p className="country-area">
          area: 3085 sq miles
          </p>
          <p className="country-density">
          pop. density: 400 people/sq mile
          </p>
        </main>
      </div>
    )
  }
}

export default Card;