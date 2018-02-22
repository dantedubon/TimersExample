import React, { Component } from "react";
import * as helpers from "./helpers";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import {
  createTimer,
  updateTimer,
  deleteTimer,
  startTimer,
  stopTimer
} from "./actions";
class TimersDashboard extends Component {
  handleCreateFormSubmit = timer => {
    this.props.createTimer(timer);
  };

  handleEditFormSubmit = attrs => {
    this.props.updateTimer(attrs);
  };

  handleTrashClick = timerId => {
    this.props.deleteTimer(timerId);
  };

  handleStartClick = timerId => {
    this.props.startTimer(timerId);
  };

  handleStopClick = timerId => {
    this.props.stopTimer(timerId);
  };

  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList
            timers={this.props.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
          <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  timers: state.timerDashboardReducer.timers
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createTimer,
      updateTimer,
      deleteTimer,
      startTimer,
      stopTimer
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TimersDashboard);
