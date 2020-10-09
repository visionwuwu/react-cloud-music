import * as actionTypes from "./actionCreators";
import { fromJS } from "immutable";

const defaultState = fromJS({
  category: "",
  alpha: "",
  singerList: [],
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false,
  listOffset: 0, // 请求列表的偏移不是page,是个数
});

export default (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.action.CHANGE_ALPHA:
      return state.merge({
        "alpha": action.data,
        listOffset: 0,
        enterLoading: true
      });
    case actionTypes.CHANGE_CATOGORY:
      return state.merge({
        "category": action.data,
        listOffset: 0,
        enterLoading: true
      });
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set("singerList", action.data);
    default: 
      return state;
  }
}