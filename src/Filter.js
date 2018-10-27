import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  constructor(){
    super(); 
    this.state = {
      populationSelected: false, 
      gdpSeleceted: false, 
      areaSelected: false, 
      climateSelected: false,
      continentSelected: false
    }
  }
  togglePopulationMenu = () => {
    this.setState({
      populationSelected: true
    })
  }

  toggleGdpMenu = () => {
    this.setState({
      gdpSelected: true
    })
  }

  toggleAreaMenu = () => {
    this.setState({
      areaSelected: true
    })
  }
  
  toggleClimateMenu = () => {
    this.setState({
      climateSelected: true
    })
  }

  toggleContinentMenu = () => {
    this.setState({
      continentSelected: true
    })
  }

  render() {
  // let navBarItems = ['Population', 'GDP', 'Area', 'Climate', 'Continent'];
    return (
      <nav>
        {this.props.items.map((item) => {
                return <li>{item.title} </li>
              }) }
      </nav>
    )
  }
}
export default Filter;