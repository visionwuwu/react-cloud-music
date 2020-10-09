import { combineReducers } from "redux-immutable"
import { reducer as recommendReducer } from "../application/Recommend/store/index"
import { reducer as playerReducer } from "../application/Player/store/index"

export default combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})