import {
  SEARCH_BLUR,
  SEARCH_FOCUS,
  GET_SEARCH_LIST,
  MOUSE_IN,
  MOUSE_LEAVE,
  CHANGE_LIST
} from './actionTypes'

const defaultState = {
  focused: false,
  isShow: true,
  list: [],
  page: 0,
  totalPage: 0,
}

export default (state = defaultState, action) => {
  if(action.type === SEARCH_BLUR) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = !newState.focused
    newState.isShow = !newState.isShow
    return newState
  }

  if(action.type === SEARCH_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = !newState.focused
    newState.isShow = !newState.isShow
    return newState
  }

  if(action.type === GET_SEARCH_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.data
    return newState
  }

  if(action.type === MOUSE_IN) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.isShow = false
    return newState
  }

  if(action.type === MOUSE_LEAVE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.isShow = true
    newState.focused = !newState.focused
    return newState
  }

  if(action.type === CHANGE_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.page = action.page
    return newState
  }

  return state
}