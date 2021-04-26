import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroList from './HeroList';
class Hero extends Component {

  render() {
    return ( 
      <>
        <Header/>
        <main>
          <HeroList/>
        </main>
        <Footer/>
      </>
    );
  }

}

export default Hero;
