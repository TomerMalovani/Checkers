import { combineReducers } from "redux";
import app from "../containers/App/meta/reducer";
import board from "../containers/boardContainer/meta/reducer";

export default combineReducers({
  app,
  board,
});
