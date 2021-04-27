import { Component } from 'react';
import './HeroSearch.css';
import React from 'react';

export class HeroSearch extends Component {
  state = {
    nameFilter: '',
    sortField: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ nameFilter: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {
    const { nameFilter, sortField } = this.state;
    

    return (
      <form className="HeroSearch">
        <input
          name="nameFilter"
          value={nameFilter}
          onChange={this.handleNameChange}
        />

        <select 
          name="sortField"
          value={sortField}
          onChange={this.handleSearchChange}
        >
          <option value="name">by name</option>
          <option value="type">by type</option>
        </select>

        <button>Search!</button>
      </form>
    
    );
  }

}

export default HeroSearch;