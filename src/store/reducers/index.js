import { combineReducers } from "redux";
import authReducer from "./authReducer";
import windowReducer from "./windowReducer";
import stocksReducer from "./stocksReducer";

export default combineReducers({
  auth: authReducer,
  window: windowReducer,
  stocks: stocksReducer
});
