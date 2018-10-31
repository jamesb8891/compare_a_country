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
      maxGDP: '',
      filteredCountries: []
    }
  }

  toggleSelected = (event) => {
    event.preventDefault(); 
    if (!this.state.selected) {
      let itemName = event.target.getAttribute('name') 
      this.setState({
        selected: itemName
      })
    } else {
      this.setState({
        selected: '',
        filteredCountries: []
      })
    }
    
  }

  handleChange = (event) => {
    const changedFilter = event.target.className;
    this.setState({
      [changedFilter]: event.target.value
    })
  }

  filterPopulation = (event) => {
    event.preventDefault();
    const minPop = this.state.minPopulation || 0;
    const maxPop = this.state.maxPopulation || 2000000000;
    const filteredCountries = this.props.countryData.countries.filter((country) => {
      if (country.population < maxPop && country.population > minPop) {
        return country;
      }
      console.log(filteredCountries)
    });
    this.props.displayFilteredCountries(filteredCountries);
    this.setState({
      minPopulation: '',
      maxPopulation: '',
      filteredCountries: filteredCountries
    })
  }

  filterGDP = (event) => {
    event.preventDefault();
    const minGDP = this.state.minGDP || 0;
    const maxGDP = this.state.maxGDP || 2000000000;
    const filteredCountries = this.props.countryData.countries.filter((country) => {
      if (country.population < maxGDP && country.population > minGDP) {
        return country.name;
      }
      
    })
    this.setState({
      minGDP: '',
      maxGDP: '',
      filteredCountries: filteredCountries
    })
  }  

  render() { 
      return (
      <div>
        <nav>
          {this.props.items.map((item) => {
                return <li name={item.title} className={item.id} onClick={this.toggleSelected}> {item.title} </li>
              })}
        </nav>
        <div className={this.state.selected === 'Population' ? 'filter-class' : 'hidden'}>
          <form onSubmit={this.filterPopulation}>
            <input type="text" placeholder="min population" className="minPopulation" value={this.state.minPopulation} onChange={this.handleChange}/> 
            <input type="text" placeholder="max population" className="maxPopulation" value={this.state.maxPopulation} onChange={this.handleChange}/>
            <button className="population-range-button" type="submit">Find Countries</button>
          </form>
          <div className="filtered-countries"> 
              {this.state.filteredCountries.map((country) => {
                return <li className="country-list"> <span className="country-name"> {country.name} </span> population: {country.population} </li>
              })}
          </div>
        </div>
        <div className={this.state.selected === 'GDP' ? 'filter-class' : 'hidden'}>
          <form onSubmit={this.filterGDP}>
            <input type="text" placeholder="min gdp" className="minGDP" value={this.state.minGDP} onChange={this.handleChange}/> 
            <input type="text" placeholder="max gdp" className="maxGDP" value={this.state.maxGDP} onChange={this.handleChange}/>
            <button className="gdp-range-button" type="submit">Find Countries</button>
          </form>
          <div className="filtered-countries"> 
              {this.state.filteredCountries.map((country) => {
                return <li className="country-list"> <span className="country-name">country: {country.name} </span>      GDP: ${country.GDP}/capita </li>
              })}
          </div>
        </div>
      </div>
   
      )        
  }
}


export default Filter;