import { GET_MAIN_LIST } from './actionTypes'

const defaultState = {
  title: '',
  content: ''
}

export default (state = defaultState, action) => {
  if(action.type === GET_MAIN_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.title = action.data.title
    newState.content = action.data.content
    return newState
  }

  return state
}