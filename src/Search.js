import React, { Component } from "react";
import "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: ""
    };
  }
  handleChange = event => {
    this.setState({
      countryName: event.target.value.toLowerCase()
    });
  };

  takeCountry = (event, country) => {
    event.preventDefault();
    this.props.updateCountryInput(this.state.countryName);
    this.props.findCountry(this.state.countryName);
    this.setState({
      countryName: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.takeCountry}>
        <input
          className="input"
          type="text"
          placeholder="Search for a Country"
          value={this.state.countryName}
          onChange={this.handleChange}
          country={this.state.countryName}
        />
        <button className="submit-button" type="submit">
          {" "}
          search!{" "}
        </button>
        <button className="clear-button" onClick={this.props.clearAllCountries}>
          {" "}
          clear all{" "}
        </button>
      </form>
    );
  }
}
export default Search;
