import React, { Component } from 'react';
import Card from './Card.js';


class CardContainer extends Component {

 render() {
  let cards = this.props.displayCards.map((country) => 
    <Card country={country} />
  )
    return (
    <div> {cards} </div>
    )
  }
}

export default CardContainer;