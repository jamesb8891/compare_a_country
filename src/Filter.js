import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  constructor(props){
    super(props); 
    this.state = {
      selected: ''
    }
  }

  toggleSelected = (event) => {
    let itemName = event.target.getAttribute('name') 
      this.setState({
        selected: itemName
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
          <form>
            <input type="text" placeholder="min population"/> 
            <input type="text" placeholder="max population"/>
            <button className="population-range-button">Find Countries</button>
          </form>
        </div>
        <div className={this.state.selected === 'GDP' ? 'filter-class' : 'hidden'}>
          <form>
            <input type="text" placeholder="min gdp"/> 
            <input type="text" placeholder="max gdp"/>
            <button className="gdp-range-button">Find Countries</button>
          </form>
        </div>
        {/* <div className={this.state.selected === 'Continent' ? 'filter-class' : 'hidden'}>
          <ul>
            {this.props.continentData.map((item) => {
              return <li>{item.name}</li> 
              })}
         </ul>
        </div> */}
    </div>
    )
  }
}


export default Filter;