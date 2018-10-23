import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search for a Country"/>
        <button className="submit-" type="submit">Submit</button>
      </form>
    )
  }
}
export default Search;