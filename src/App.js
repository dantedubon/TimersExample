import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import TimersDashboard from "./TimerDashboard/TimersDashboard";
import "semantic-ui-css/semantic.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TimersDashboard />
        </div>
      </Provider>
    );
  }
}

export default App;
