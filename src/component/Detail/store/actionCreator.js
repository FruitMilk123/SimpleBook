import { GET_MAIN_LIST } from './actionTypes'
import axios from 'axios'

export const getMainList = (data) => {
  return {
    type: GET_MAIN_LIST,
    data
  }
}

export const getMainListAction = () => {
  return (dispatch) => {
    axios.get('../../../../data/DetailMainList.json').then((res) => {
      dispatch(getMainList(res.data))
    })
  }
}