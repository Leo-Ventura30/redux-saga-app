import { combineReducers } from "redux";
import count from "./count";
import favorites from "./favorites";
export default combineReducers({
  favorites,
  count,
});
