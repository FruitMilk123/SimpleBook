import axios from 'axios'
import { GET_ARTLE_LIST, LOAD_MORE } from "./actionTypes";

export const getArtleList = (data) => {
  return {
    type: GET_ARTLE_LIST,
    data
  }
}

export const loadMore = (data) => {
  return {
    type: LOAD_MORE,
    data
  }
}

export const getArtleListWithAjaxAction = () => {
  return (dispatch) => {
    axios.get('../../../../data/artleList.json').then((res) => {
      dispatch(getArtleList(res.data))
    })
  }
}

export const loadMoreAction = () => {
  return (dispatch) => {
    axios.get('../../../../data/LoadMore.json').then((res) => {
      dispatch(loadMore(res.data))
    })
  }
}