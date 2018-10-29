import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {
  constructor(){
    super(); 
    this.state = {
      populationSelected: false, 
      gdpSelected: false, 
      areaSelected: false, 
      climateSelected: false,
      continentSelected: false
    }
  }
  togglePopulation = (event) => {
    event.preventDefault()
    this.setState({
      populationSelected: true
    })
  }

  toggleGdp = (event) => {
    event.preventDefault()
    this.setState({
      gdpSelected: true
    })
  }

  toggleArea = (event) => {
    event.preventDefault()
    this.setState({
      areaSelected: true
    })
  }
  
  toggleClimate = (event) => {
    event.preventDefault()
    this.setState({
      climateSelected: true
    })
  }

  toggleContinent = (event) => {
    event.preventDefault()
    this.setState({
      continentSelected: true
    })
  }

  render() {
    return (
      <nav>
        {this.props.items.map((item) => {
                return <li>{item.title} </li>
              }) }
      </nav>
    )
  }
}
// these are the elements that will render when a specific <li> is selected
{/* <div className="population-filter">
<form>
  <input type="text" placeholder="min population"/> 
  <input type="text" placeholder="max population"/>
  <button className="population-range-button">Find Countries</button>
</form>
</div> */}

{/* <div className="gdp-filter">
<form>
  <input type="text" placeholder="min gdp"/> 
  <input type="text" placeholder="max gdp"/>
  <button className="gdp-range-button">Find Countries</button>
</form>
</div> */}

{/* <div className="continent-list">
  <ul>
    {this.props.continentData.continents.map((continent) =>{
      return <li>{continent.name}</li>
    })}
  </ul>
</div> */}


export default Filter;