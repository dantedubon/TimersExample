import React, { Component } from 'react';
import './App.css';

import TimersDashboard from './TimersDashboard';
import 'semantic-ui-css/semantic.css';
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
