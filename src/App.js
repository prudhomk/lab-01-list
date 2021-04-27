import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HeroList from './HeroList';
import heroes from './Data';
class App extends Component {

  render() {
    return ( 
      <div className='App'>
        <Header/>

        <main>
          <HeroList heroes={heroes}/>
        </main>

        <Footer/>
      </div>
    );
  }

}

export default App;
