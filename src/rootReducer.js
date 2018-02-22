import { combineReducers } from "redux";
import timerDashboardReducer from "./TimerDashboard/reducer";
export default combineReducers({
  timerDashboardReducer: timerDashboardReducer
});
