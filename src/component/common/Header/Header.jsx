import React from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchInput,
  Button,
  SearchInfo,
  SearchInfoHeader,
  SearchInfoTitle,
  ChangeMore,
  SearchInfoList,
  SearchInfoItem
} from './HeaderCSS'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
  searchFocusAction,
  getSearchListWithAJAX,
  mouseInAction,
  mouseLeaveAction,
  changeListAction
} from './store/actionCreater'

class Header extends React.Component {
  getPageList() {
    const pageList = []
    if (this.props.searchList.length) {
      for (let i = this.props.page * 10; i < (this.props.page + 1) * 10; i++) {
        if (this.props.searchList[i] !== undefined) {
          pageList.push(this.props.searchList[i])
        }
      }
    }
    return pageList
  }

  render() {
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left active">下载APP</NavItem>
          <CSSTransition
            in={this.props.focused}
            timeout={500}
            classNames="search"
          >
            <SearchInput
              className={ this.props.focused ? 'focused' : '' }
              onFocus={ () => this.props.handleFocus(this.props.searchList) }
            />
          </CSSTransition>
            { this.props.login ? <NavItem className="right">退出</NavItem> : <Link to="/account/login"><NavItem className="right">登录</NavItem></Link> }
          <NavItem className="right">Aa</NavItem>
        </Nav>
        <Button className="register">注册</Button>
        <Button className="writing">写文章</Button>

        <SearchInfo
          className={ this.props.isShow ? 'hide' : '' }
          onMouseEnter={ this.props.handleMouseIn }
          onMouseLeave={ this.props.handleMouseLeave }
        >
          <SearchInfoHeader>
            <SearchInfoTitle>热门搜索</SearchInfoTitle>
            <ChangeMore onClick={ () => this.props.changeList(this.props.page, this.props.totalPage) }>换一批</ChangeMore>
          </SearchInfoHeader>
          <SearchInfoList>
            { this.getPageList().map(item => {
              return <SearchInfoItem key={ item }>{ item }</SearchInfoItem>
            }) }
          </SearchInfoList>
        </SearchInfo>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
    searchList: state.header.list,
    page: state.header.page,
    totalPage: Math.ceil(state.header.list.length / 10),
    isShow: state.header.isShow,
    login: state.login.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(list) {
      dispatch(searchFocusAction())
      if(list.length === 0) {
        dispatch(getSearchListWithAJAX())
      }
    },
    handleMouseIn() {
      dispatch(mouseInAction())
    },
    handleMouseLeave() {
      dispatch(mouseLeaveAction())
    },
    changeList(page, totalPage) {
      if(page < totalPage - 1) {
        dispatch(changeListAction(page + 1))
      } else {
        dispatch(changeListAction(0))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)