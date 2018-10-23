import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Seach for a Country"/>
        <button className="submit-" type="submit">Submit</button>
      </form>
    )
  }
}
export default Search;