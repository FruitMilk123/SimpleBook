import React from 'react'
import { LoginContainer, Input, Button } from './LoginCSS'
import { connect } from 'react-redux'
import { loginAction } from '../../store/actionCreator'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
  render() {

    if(!this.props.loginStatus) {
      return (
        <LoginContainer>
          <Input innerRef={ (input) => { this.account = input } }/>
          <Input innerRef={ (input) => { this.password = input } } type="password"/>
          <Button onClick={ () => this.props.login() }>登录</Button>
        </LoginContainer>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.login.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login() {
      dispatch(loginAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)