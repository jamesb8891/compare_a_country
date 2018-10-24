import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor() {
    super(); 
    this.state = {
      countryName: ''
    }
  }
    handleChange = (event) => {
      this.setState({
        countryName: event.target.value
      });
    }

    takeCountry = (event, country) => {
      event.preventDefault();  
      document.querySelector('.input').value = '';
    }
  
  render() {
    return (
      <form>
        <input className= "input"type="text" placeholder="Search for a Country" onChange={this.handleChange} country={this.state.countryName}/>
        <button onClick={this.takeCountry}className="submit-button" type="submit">search!</button>
      </form>
    )
  }
}
export default Search;