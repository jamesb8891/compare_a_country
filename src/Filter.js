import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
  let navBarItems = ['Population', 'GDP', 'Area', 'Climate', 'Continent'];
    return (
      <nav>
        {navBarItems.map((item) => {
                return <li> {item} </li>
              }) }
      </nav>
    )
  }
}
export default Filter;