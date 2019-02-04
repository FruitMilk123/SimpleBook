import { combineReducers } from 'redux'
import HeaderReducer from '../component/common/Header/store/reducer'
import HomeReducer from '../component/Home/store/reducer'
import DetailReducer from '../component/Detail/store/reducer'
import LoginReducer from '../component/Account/store/reducer'

const reducer = combineReducers({
  header: HeaderReducer,
  home: HomeReducer,
  detail: DetailReducer,
  login: LoginReducer
})

export default reducer