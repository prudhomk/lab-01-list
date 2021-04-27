import { Component } from 'react';
import './HeroSearch.css';
import React from 'react';

class HeroSearch extends Component {

  render() {
    return (
      <form className="HeroSearch">
        <input/>
        <select name="sortField">
          <option value="name">sort by name</option>
          <option value="type">sort by type</option>
        </select>
        <button>Search!</button>
      </form>
    
    );
  }

}

export default HeroSearch;