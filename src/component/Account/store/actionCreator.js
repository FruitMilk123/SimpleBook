import axios from 'axios'
import { CHANGE_LOGIN_STATUS } from './actionTypes'

export const changeLoginStatus = () => {
  return {
    type: CHANGE_LOGIN_STATUS
  }
}

export const loginAction = () => {
  return (dispatch) => {
    dispatch(changeLoginStatus())
  }
}