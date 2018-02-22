import {
  CREATE_TIMER,
  UPDATE_TIMER,
  DELETE_TIMER,
  START_TIMER,
  STOP_TIMER
} from "./constants";

export const createTimer = timer => {
  return {
    type: CREATE_TIMER,
    payload: timer
  };
};
export const updateTimer = attrs => {
  return {
    type: UPDATE_TIMER,
    payload: attrs
  };
};
export const deleteTimer = timerId => {
  return {
    type: DELETE_TIMER,
    payload: timerId
  };
};
export const startTimer = timerId => {
  return {
    type: START_TIMER,
    payload: timerId
  };
};
export const stopTimer = timerId => {
  return {
    type: STOP_TIMER,
    payload: timerId
  };
};
