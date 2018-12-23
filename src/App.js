import React, { Component } from 'react';
import './App.css';
import Restaurant from "./components/Restaurant";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Restaurant />
        </header>
      </div>
    );
  }
}

export default App;
