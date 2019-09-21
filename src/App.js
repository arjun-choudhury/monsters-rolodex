import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: 'Frankstein', id: '1' },
        { name: 'Dracula', id: '2' },
        { name: 'Zombie', id: '3' }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.monsters.map(monsters => (<h1 key={monsters.id}>{monsters.name}</h1>))
          }
        </header>
      </div>
    )
  }
}

export default App;
