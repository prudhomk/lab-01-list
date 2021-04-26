import { Component } from 'react';
import './HeroList.css';
import React from 'react';
import HeroItem from './HeroItem';


class HeroList extends Component {

  render() {
    const heroes = this.props.heroes;

    return (
      
      <ul className="HeroList">
        {heroes.map(hero => (
          <HeroItem key={hero.name} hero={hero}/>
        ))}
     
      </ul>
    );
  }

}

export default HeroList;