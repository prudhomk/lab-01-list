import { Component } from 'react';
import './HeroSearch.css';
import React from 'react';

export class HeroSearch extends Component {
  state = {
    nameFilter: '',
    sortField: '',
    typeFilter: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ nameFilter: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleTypeChange = ({ target }) => {
    this.setState({ typeFilter: target.value });
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
    const { nameFilter, sortField, typeFilter } = this.state;
    const { types } = this.props;

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
          <option value="">sort...</option>
          <option value="name">by name</option>
        </select>

        <select
          name="typefilter"
          value={typeFilter}
          onChange={this.handleTypeChange}
        >
          <option value="">All</option>
          {types.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        <button>Search!</button>
      </form>
    
    );
  }

}

export default HeroSearch;