import { Component } from 'react';
import './HeroSearch.css';
import React from 'react';

export default class HeroSearch extends Component {
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

  render() {
    const { nameFilter, sortField, typeFilter } = this.state;
    const { types } = this.props;
    
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