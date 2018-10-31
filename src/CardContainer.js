import React, { Component } from "react";
import Card from "./Card.js";
import "./CardContainer.scss";

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cards = this.props.displayCards.map(country => {
      if (country) {
        let continent = this.props.continentData.continents.find(continent =>
          continent.countries.includes(country.name)
        );
        return (
          <Card
            country={country}
            continent={continent}
            key={country.name}
            deleteCard={this.props.deleteCard}
            className={continent}
          />
        );
      } else {
        this.props.alertUser();
      }
    });
    return <div className="card-cont"> {cards} </div>;
  }
}

export default CardContainer;
