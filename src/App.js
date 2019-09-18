import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string_1: 'Jai Shri RAM',
      string_2: 'Jai Mata Di'
    };
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <p>
          { this.state.string_1 }
        </p>
        <p>
          { this.state.string_2 }
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>       
      </header>
    </div>)
  }
}

export default App;
