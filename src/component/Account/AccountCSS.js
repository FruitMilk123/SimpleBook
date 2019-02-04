import styled from 'styled-components'

export const AccountContainer = styled.div`
  width: 400px;
  height: 500px;
  background-color: palegoldenrod;
  margin: 150px auto;
  padding: 50px 50px 30px 50px;
  background-color: #f1f1f1;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const Title = styled.div`
  a {
    width: 56px;
    height: 42px;
    padding: 10px;
    font-size: 18px;
    text-decoration: none;
    color: #969696;
    &:first-of-type {
      margin-left: 82px;
    }
    &.active {
      color: #EA6F5A;
      font-weight: 700;
      border-bottom: 3px solid #EA6F5A;
    }
  }
  
  i {
    width: 26px;
    height: 40px;
    padding: 10px;
  }
  
  
`