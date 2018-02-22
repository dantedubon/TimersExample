import {
  CREATE_TIMER,
  UPDATE_TIMER,
  DELETE_TIMER,
  START_TIMER,
  STOP_TIMER
} from "./constants";
import * as helpers from "./helpers";
const initialState = {
  timers: []
};

function timerDashboardReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TIMER:
      const t = helpers.newTimer(action.payload);
      return {
        ...state,
        timers: state.timers.concat(t)
      };

    case DELETE_TIMER:
      return {
        ...state,
        timers: state.timers.filter(t => t.id !== action.payload)
      };
    case START_TIMER: {
      const now = Date.now();
      const newTimers = state.timers.map(timer => {
        if (timer.id === action.payload) {
          return Object.assign({}, timer, {
            runningSince: now
          });
        } else {
          return timer;
        }
      });
      return {
        ...state,
        timers: newTimers
      };
    }
    case UPDATE_TIMER: {
      const timersUpdated = state.timers.map(timer => {
        if (timer.id === action.payload.id) {
          return Object.assign({}, timer, {
            title: action.payload.title,
            project: action.payload.project
          });
        } else {
          return timer;
        }
      });
      return {
        ...state,
        timers: timersUpdated
      };
    }

    case STOP_TIMER: {
      const now = Date.now();
      return {
        ...state,
        timers: state.timers.map(timer => {
          if (timer.id === action.payload) {
            return Object.assign({}, timer, {
              runningSince: now
            });
          } else {
            return timer;
          }
        })
      };
    }
    default:
      return state;
  }
}

export default timerDashboardReducer;
