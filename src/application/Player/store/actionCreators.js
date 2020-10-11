import {
  SET_PLAYLIST,
  SET_SEQUECE_PLAYLIST,
  SET_CURRENT_INDEX
} from "./constants";
import { fromJS } from "immutable";

export const changeSequecePlayList = (data) => ({
  type: SET_SEQUECE_PLAYLIST,
  data: fromJS(data)
})

export const changePlayList = (data) => ({
  type: SET_PLAYLIST,
  data: fromJS(data)
})

export const changeCurrentIndex = (data) => ({
  type: SET_CURRENT_INDEX,
  data
})