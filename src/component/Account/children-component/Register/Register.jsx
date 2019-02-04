import React from 'react'
import { RegisterContainer, Input, Button } from './RegisterCSS';

export default class Login extends React.Component {
  render() {
    return (
      <RegisterContainer>
        <Input/>
        <Input/>
        <Button>注册</Button>
      </RegisterContainer>
    )
  }
}