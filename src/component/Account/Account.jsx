import React from 'react'
import { AccountContainer, Title } from './AccountCSS'
import { NavLink, Route } from 'react-router-dom'
import Register from './children-component/Register/Register.jsx'
import Login from './children-component/Login/Login.jsx'

export default class Account extends React.Component{
  render() {
    return (
      <AccountContainer>
        <Title>
          <NavLink to="/account/login">登录</NavLink>
          <i>·</i>
          <NavLink to="/account/register">注册</NavLink>
        </Title>
        <Route path="/account/register" extra component={ Register } />
        <Route path="/account/login" extra component={ Login } />
      </AccountContainer>
    )
  }
}