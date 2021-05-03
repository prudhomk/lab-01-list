import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroList from './HeroList';
import HeroSearch from './HeroSearch';
import request from 'superagent';





class App extends Component {
  state = {
    heroes: [],
    heroTypes: []
  }

  componentDidMount() {
    this.handleSearch({});
    
  }
 
  handleSearch = async ({ nameFilter, sortField, typeFilter }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const response = await request.get('https://lab-06-server.herokuapp.com/api/heroes');
    const heroTypes = [...new Set(response.body.map(hero => hero.type))];
    const searchedData = response.body
      .filter(hero => {
        return !nameFilter || hero.name.match(nameRegex);
      })
      .filter(hero => {
        return !typeFilter || hero.type === typeFilter;
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ heroes: searchedData, heroTypes: heroTypes });
  }
  render() {
    const { heroes, heroTypes } = this.state;

    return ( 
      <div className='App'>
        
        <Header/>
        
        <HeroSearch onSearch={this.handleSearch} types={heroTypes}/>
        

        <main>
          <HeroList heroes={heroes}/>
        </main>

        <Footer/>
      
      </div>
    );
  }

}

export default App;
