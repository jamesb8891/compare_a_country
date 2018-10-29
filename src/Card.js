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
    return (
      <div className ="card">
        <header className="card-header">
          <input className="star-button" type="image" src={star} />
          <div className="country-info">
            <h1 className = "country-name">
            {this.props.country.name}
            </h1>
            <p className = "continent-name">
            {this.props.continent.name}
            </p>
          </div>
          <input className = "delete-button" type="image" src={close} onClick={this.deleteCard} /> 
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