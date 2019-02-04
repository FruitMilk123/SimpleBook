import React from 'react'
import {
  HomeContainer,
  HomeLeft,
  HomeRight,
  ToTop
} from './HomoCSS'

import Artle from './children-components/Artle/Artle'
import Popular from './children-components/Popular/Popular.jsx'
import Recommend from './children-components/Recommend/Recommend.jsx'

export default class Home extends React.Component{
  render() {
    return (
      <div>
        <HomeContainer className="clearFix">
          <HomeLeft>
            <img style={{ width: '100%' }} src="//upload.jianshu.io/admin_banners/web_images/4607/2836fb00d1d98798ffe218fc709ec80d30b18c0e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
            <Artle></Artle>
          </HomeLeft>
          <HomeRight>
            <Popular></Popular>
            <Recommend></Recommend>
          </HomeRight>
          <ToTop ref="topBtn" onClick={ () => this.toTop() }>^</ToTop>
        </HomeContainer>
      </div>
    )
  }

  componentDidMount() {
    window.addEventListener('scroll', this.windowScrollHandle)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.windowScrollHandle)
  }

  toTop = () => {
    window.scroll(0, 0)
  }
}