import * as actionTypes from "./constants";
import { fromJS } from "immutable";

const defaultState = fromJS({
  playList: [],
  sequecePlayList: [],
  currentIndex: -1
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SET_SEQUECE_PLAYLIST:
      return state.set("sequecePlayList", action.data);
    case actionTypes.SET_PLAYLIST:
      return state.set("playList", action.data);
    case actionTypes.SET_CURRENT_INDEX:
      return state.set("currentIndex", action.data);
    default: 
      return state;
  }
}