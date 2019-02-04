import styled from 'styled-components'

const picUrl = '../../images/nav-logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position:relative;
  
`;

export const Logo = styled.div`
  width: 100px;
  height: 58px;
  position:absolute;
  left: 0;
  top: 0;
  background: url(${ picUrl });
  background-size: contain;
  cursor: pointer;
`;

export const Nav = styled.div`
  width: 945px;
  height: 58px;
  margin: 0 auto;
`
export const NavItem = styled.div`
  padding: 0 15px;
  height: 58px;
  text-align: center;
  line-height: 58px;
  margin: 0 15px;

  &.left {
    float:left;
    color: #333;
  }
  
  &:first-of-type {
    color: #EA6F5A;
  }
  
  &.active {
    background-color: #f5f5f5;
  }
  
  &.right {
    float:right;
    color: #969696;
    font-size: 14px;
  }
`

export const SearchInput = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 200px;
  height: 38px;
  border: none;
  padding: 0 20px;
  border-radius: 50px;
  margin-top: 10px;
  margin-left: 10px;
  background-color:#eee;
  float:left;
  
  &.focused {
    width: 250px;
  }
  
  &.search-enter {
    width: 200px;
  }
  &.search-enter-active {
    width: 250px;
    transition: width .5s;
  }
  &.search-enter-done {
    width: 250px;
  }
  &.search-exit {
    width: 250px;
  }
  &.search-exit-active {
    width: 200px;
    transition: width .5s;
  }
  &.search-exit-done {
    width: 200px;
  }
`

export const Button = styled.button`
  position:absolute;
  right: 0;
  top: 0;
  font-size: 16px;
  height: 38px;
  line-height: 38px;
  border-radius: 19px;
  border: none;
  color: #EA6F5A;
  
  &.register {
    border: 1px solid #EA6F5A;
    width: 80px;
    top: 10px;
    right: 280px;
    background-color: #fff;
  }
  
  &.writing {
    border: 1px solid #EA6F5A;
    width: 100px;
    top: 10px;
    right: 150px;
    background-color: #EA6F5A;
    color: #fff;
  }
`

export const SearchInfo = styled.div`
  width: 250px;
  position:absolute;
  top: 58px;
  left: 700px;
  border-radius: 3px;
  padding: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background-color:#fff;
  
  &.hide {
    display: none;
  }
  
  &::before {
    content: "";
    display: block;
    width: 15px; 
    height: 15px;
    background-color: #fff;
    position:absolute;
    top: -6px;
    left: 24px;
    transform: rotate(45deg);
  }
`

export const SearchInfoHeader = styled.div`
  overflow:hidden;
`

export const SearchInfoTitle = styled.span`
  height: 20px;
  display: block;
  float:left;
  font-size: 14px;
  color: #969696;
`

export const ChangeMore = styled.a`
  height: 20px;
  display: block;
  float:right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
`

export const SearchInfoList = styled.div`
  width: 210px;
  height: 96px;
  margin-top: 10px;
`

export const SearchInfoItem = styled.a.attrs({
  href: '/'
})`
  text-decoration: none;
  display: block;
  float:left;
  font-size: 13px;
  color: #787878;
  padding: 2px 6px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 10px;
  
  &:nth-of-type(n+4) {
    margin-top: 10px;
  }
`