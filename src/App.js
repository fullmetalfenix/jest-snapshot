import React, { Component } from 'react';
import Items from './Components/Items';
import Header from './Components/Header'
class App extends Component {
  render() {
    const items = [
      'Thor',
      'Captain America',
      'Hulk'
    ];
    return (
      <div>
        <Header />
        <Items items={items} />
      </div>
    );
  }
}

export default App; 