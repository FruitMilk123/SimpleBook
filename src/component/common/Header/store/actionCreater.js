import {
  SEARCH_BLUR,
  SEARCH_FOCUS,
  GET_SEARCH_LIST,
  MOUSE_IN,
  MOUSE_LEAVE,
  CHANGE_LIST
} from './actionTypes'
import axios from 'axios'

export const searchFocusAction = () => {
  return {
    type: SEARCH_FOCUS
  }
}

export const searchBlurAction = () => {
  return {
    type: SEARCH_BLUR
  }
}

export const getSearchListAction = (AJAXdata) => {
  return {
    type: GET_SEARCH_LIST,
    data: AJAXdata
  }
}

export const mouseInAction = () => {
  return {
    type: MOUSE_IN
  }
}

export const mouseLeaveAction = () => {
  return {
    type: MOUSE_LEAVE
  }
}

export const changeListAction = (page) => {
  return {
    type: CHANGE_LIST,
    page
  }
}

export const getSearchListWithAJAX = () => {
  return (dispatch) => {
    axios.get('../../../data/searchData.json').then((res) => {
      dispatch(getSearchListAction(res.data))
    })
  }
}