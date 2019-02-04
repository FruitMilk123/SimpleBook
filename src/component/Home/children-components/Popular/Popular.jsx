import React from 'react'
import { PopularContainer } from './PopularCSS'

export default class Home extends React.Component{
  render() {
    return (
      <PopularContainer>
          <ul className="clearFix">
            <li><a href="#"><img src="../../../../images/banner-s-1.png" alt=""/></a></li>
            <li><a href="#"><img src="../../../../images/banner-s-2.png" alt=""/></a></li>
            <li><a href="#"><img src="../../../../images/banner-s-3.png" alt=""/></a></li>
            <li><a href="#"><img src="../../../../images/banner-s-4.png" alt=""/></a></li>
            <li><a href="#"><img src="../../../../images/banner-s-5.png" alt=""/></a></li>
          </ul>
      </PopularContainer>
    )
  }
}