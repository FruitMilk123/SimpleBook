import { GET_ARTLE_LIST, LOAD_MORE } from './actionTypes'

const defaultState = {
  ArtleList: []
}

export default (state = defaultState, action) => {
  if(action.type === GET_ARTLE_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.ArtleList = action.data.ArtleList
    return newState
  }

  if(action.type === LOAD_MORE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.ArtleList.push(...action.data.ArtleList)
    return newState
  }

  return state
}