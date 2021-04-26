import { Component } from 'react';
import './HeroItem.css';
import React from 'react';

class HeroItem extends Component {

  render() {
    const hero = this.props.hero;
    console.log(hero);
    return (
      <li className='HeroItem'>
        <h2>{hero.name}</h2>
        <img src={hero.url} alt={hero.name}/>
        <p>Type: {hero.type}</p>
      </li>
      
    
    );
  }

}

export default HeroItem;