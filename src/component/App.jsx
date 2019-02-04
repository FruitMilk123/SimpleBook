import React from 'react'
import Header from './common/Header/Header.jsx'
import Detail from './Detail/Detail.jsx'
import { Provider } from 'react-redux'
import store from '../store/store'
import { HashRouter, Route } from 'react-router-dom'
import Home from './Home/home.jsx'
import Account from './Account/Account.jsx'
import Login from './Account/children-component/Login/Login.jsx'

export default class App extends React.Component {

  render() {
    return (
        <Provider store={ store }>
          <HashRouter>
            <div>
              <Header/>
              <Route path="/" exact component={ Home }></Route>
              <Route path="/detail/:id" exact component={ Detail }></Route>
              <Route path="/account/login" exact component={ Account }/>
              <Route path="/account/register" exact component={ Account }/>
            </div>
          </HashRouter>
        </Provider>
    )
  }
}