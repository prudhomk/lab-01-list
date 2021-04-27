import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroList from './HeroList';
import heroes from './data';
import HeroSearch from './HeroSearch';

const heroTypes = [...new Set(heroes.map(h => h.type))];

class App extends Component {
  state = {
    heroes: heroes
  }

  handleSearch = ({ nameFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = heroes
      .filter(hero => {
        return !nameFilter || hero.name.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ heroes: searchedData });
  }
  render() {
    const { heroes } = this.state;

    return ( 
      <div className='App'>
        
        <Header/>
        
        <HeroSearch types={heroTypes} onSearch={this.handleSearch}/>
        
        <main>
          <HeroList heroes={heroes}/>
        </main>

        <Footer/>
      
      </div>
    );
  }

}

export default App;
