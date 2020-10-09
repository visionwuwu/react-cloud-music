import {
  getHotSingerListRequest,
  getSingerListRequest
} from "../../../api/request";
import {
  CHANGE_SINGER_LIST,
  CHANGE_CATEGORY,
  CHANGE_ALPHA,
  CHANGE_LIST_OFFSET,
  CHANGE_PULLUP_LOADING,
  CHANGE_PULLDOWN_LOADING,
  CHANGE_ENTER_LOADING
} from "./constants";
import {
  fromJS
} from "immutable";

export const changeCategory = (data) => ({
  type: CHANGE_CATEGORY,
  data
})

export const changeAlpha = (data) => ({
  type: CHANGE_ALPHA,
  data
})

const changeSingerList = (data) => ({
  type: CHANGE_SINGER_LIST,
  data: fromJS(data)
})

export const changeListOffset = (data) => ({
  type: CHANGE_LIST_OFFSET,
  data
})

// 进场动画loading
export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
})

// 滑动到最低部动画
export const changePullUpLoading = (data) => ({
  type: CHANGE_PULLUP_LOADING,
  data
})

// 顶部拉下刷新loading
export const changePullDownLoading = (data) => ({
  type: CHANGE_PULLDOWN_LOADING,
  data
})

export const getHotSingerList = () => {
  return (dispatch) => {
    getHotSingerListRequest(0).then(res => {
      console.log("======================", res)
      const data = res.artists;
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
      dispatch(changeListOffset(data.length));
    }).catch(() => {
      console.log("热门歌手数据获取失败");
    })
  }
}

export const refreshMoreHotSingerList = () => {
  return (dispatch, getState) => {
    const offset = getState().getIn(["singers", "listOffset"]);
    const singerList = getState().getIn(["singers", "singerList"]).toJS();
    getHotSingerListRequest(offset).then(res => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
      dispatch(changeListOffset(data.length));
    }).catch(() => {
      console.log("热门歌手数据获取失败");
    })
  }
}

export const getSingerList = () => {
  return (dispatch, getState) => {
    const offset = getState().getIn(["singers", "listOffset"]);
    const category = getState().getIn(["singers", "category"]);
    const alpha = getState().getIn(["singers", "alpha"]);
    getSingerListRequest(category, alpha, offset).then(res => {
      const data = res.artists;
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
      dispatch(changeListOffset(data.length));
    }).catch(() => {
      console.log("歌手数据获取失败");
    })
  }
}


export const refreshMoreSingerList = () => {
  return (dispatch, getState) => {
    const category = getState().getIn(["singers", "category"]);
    const alpha = getState().getIn(["singers", "alpha"]);
    const offset = getState().getIn(["singers", "listOffset"]);
    const singerList = getState().getIn(["singers", "singerList"]).toJS();
    getSingerListRequest(category, alpha, offset).then(res => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullDownLoading(false));
      dispatch(changeListOffset(data.length));
    }).catch(() => {
      console.log("歌手数据获取失败");
    })
  }
}
