import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GettingStartedExample from './with_google_map';
import Map from 'google-maps-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map google={window.google} />
      </div>
    );
  }
}

export default App;
