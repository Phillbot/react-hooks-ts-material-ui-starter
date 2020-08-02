import { combineReducers } from "redux";
import { monthAndYearSelectReducer, selectDatesReducer } from "./reducers";

export const rootReducer = combineReducers({
  monthAndYearSelectReducer,
  selectDatesReducer,
});
