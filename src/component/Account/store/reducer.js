import { CHANGE_LOGIN_STATUS } from './actionTypes'

const defaultState = {
  loginStatus: false
}

export default (state = defaultState, action) => {
  if(action.type === CHANGE_LOGIN_STATUS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.loginStatus = true
    return newState
  }

  return state
}