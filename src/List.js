import React, { Component } from 'react';
import './List.scss';
// import './ListItem.scss';

class List extends Component {
  constructor(props) {
    super(props);
  }

  
  render() { 
    const list = this.props.countriesMatchingFilter.map(country => <li> country.name </li>)
    return (
      <div>
      { list }
      </div>
    )
  }
}

export default List;