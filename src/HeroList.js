import { Component } from 'react';
import './HeroList.css';
import React from 'react';
import HeroItem from './HeroItem';
class HeroList extends Component {

  render() {
    return (
      
      <ul className="HeroList">
        <HeroItem/>
      </ul>
      
    
    );
  }

}

export default HeroList;