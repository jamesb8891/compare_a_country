import React, { Component } from 'react';
import './Card.css';
import canada from './images/canada.png';

class Card extends Component {
  render() {
    return (
      <div className ="card-container">
        <header className="card-header">
          <button className="star-button"> 
          *
          </button>
          <img className="country-flag" src=
          {canada}/> 
          <div className="country-info">
            <p className = "country-name">
            Canada
            </p>
            <p className = "continent-name">
            North America
            </p>
          </div>
          <button className = "delete-button">
          X
          </button>
        </header>
        <main>
        </main>
      </div>
    )
  }
}

export default Card;