import styled from 'styled-components'

export const LoginContainer = styled.div`
  margin-top: 70px;
`

export const Input = styled.input.attrs({
  placeholder: '输入账号和密码'
})`
  width: 300px;
  height: 50px;
  padding: 4px 12px 4px 35px;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 4px 4px 0 0;
  border: none;
  background-color: hsla(0,0%,71%,.1);
  background-color: #F7F7F7;
  &:focus {
    border: none;
  }
`

export const Button = styled.button`
  width: 300px;
  height: 43px;
  background-color: #3194d0;
  border-radius: 22px;
  margin-top: 20px;
  border: none;
  font-size: 18px;
  color: #fff;
`