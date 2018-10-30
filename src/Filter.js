import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {
  constructor(props){
    super(props); 
    this.state = {
      selected: '',
      minPopulation: '',
      maxPopulation: '',
      minGDP: '',
      maxGDP: ''
    }
  }

  toggleSelected = (event) => {
    event.preventDefault(); 
    let itemName = event.target.getAttribute('name') 
      this.setState({
        selected: itemName
      })
  }

  handleChange = (event) => {
    const changedFilter = event.target.className;
    this.setState({
      [changedFilter]: event.target.value
    })
  }

  filterPopulation = (event) => {
    event.preventDefault();
    const minPop = this.state.minPopulation;
    const maxPop = this.state.maxPopulation;
    this.props.countryData.countries.filter((country) => {
      if (country.population < maxPop && country.population > minPop) {
        return country;
      }
    })
    this.setState({
      minPopulation: '',
      maxPopulation: ''
    })
  }

  filterGDP = (event) => {
    event.preventDefault();
    const minGDP = this.state.minGDP;
    const maxGDP = this.state.maxGDP;
    this.props.countryData.countries.filter((country) => {
      if (country.population < maxGDP && country.population > minGDP) {
        return country;
      }
    })
    this.setState({
      minGDP: '',
      maxGDP: ''
    })
  }  



  render() {  
    return (
      <div>
        <nav>
          {this.props.items.map((item) => {
                return <li name={item.title} className={item.id} onClick={this.toggleSelected}>{item.title}</li>
              })}
        </nav>
        <div className={this.state.selected === 'Population' ? 'filter-class' : 'hidden'}>
          <form onSubmit={this.filterPopulation}>
            <input type="text" placeholder="min population" className="minPopulation" value={this.state.minPopulation} onChange={this.handleChange}/> 
            <input type="text" placeholder="max population" className="maxPopulation" value={this.state.maxPopulation} onChange={this.handleChange}/>
            <button className="population-range-button" type="submit">Find Countries</button>
          </form>
        </div>
        <div className={this.state.selected === 'GDP' ? 'filter-class' : 'hidden'}>
          <form onSubmit={this.filterGDP}>
            <input type="text" placeholder="min gdp" className="minGDP" value={this.state.minGDP} onChange={this.handleChange}/> 
            <input type="text" placeholder="max gdp" className="maxGDP" value={this.state.maxGDP} onChange={this.handleChange}/>
            <button className="gdp-range-button" type="submit">Find Countries</button>
          </form>
        </div>
        <div className={this.state.selected === 'Continent' ? 'filter-class' : 'hidden'}>
          <ul> 
            {setTimeout(() => {
              console.log(this.props.continentData.continents);
              {this.props.continentData.continents.map((continent) => {
                return <li>{continent.name}</li>
                })
              }
            }, 1000)}
          </ul>
        </div>
    </div>
    
    )  
            
  }
}


export default Filter;