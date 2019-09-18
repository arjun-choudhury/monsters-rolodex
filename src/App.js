import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Jai Shri RAM'
    };
  }

  render() {
    return (<div className="App">
      <header className="App-header">
        <p>
          { this.state.string }
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>       
      </header>
    </div>)
  }
}

export default App;
