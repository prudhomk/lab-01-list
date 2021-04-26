import { Component } from 'react';
import './App.css';
import React from 'react';
import HeroItem from './HeroItem';
class HeroList extends Component {

  render() {
    return (
      
      <ul className="List">
        <HeroItem/>
      </ul>
      
    
    );
  }

}

export default HeroList;