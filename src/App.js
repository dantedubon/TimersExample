import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import TimersDashboard from './TimersDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
       <TimersDashboard />
      </div>
    );
  }
}

export default App;
