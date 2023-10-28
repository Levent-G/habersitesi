import { combineReducers } from "redux";
import HaberReducer from "./HaberReducer";


export default combineReducers({
  haberData: HaberReducer,

});
