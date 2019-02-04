import React from 'react'
import { ArtleContainer, LoadMoreBtn } from './ArtleCSS'
import { connect } from 'react-redux'
import { getArtleListWithAjaxAction, loadMoreAction } from '../../store/actionCreator'
import { Link } from 'react-router-dom'

class Home extends React.Component{
  render() {
    return (
      <ArtleContainer>
        <ul className="clearFix">
          { this.getArtleList() }
        </ul>
        <LoadMoreBtn onClick={ this.props.loadMore }>越多更多</LoadMoreBtn>
      </ArtleContainer>
    )
  }

  getArtleList = () => {
    return this.props.list.map((item, index) => {
      return <li key={ index }>
        <div className="content">
          <Link to={ '/detail/' + item.id } className="title">{ item.title }</Link>
          <p>
            { item.artle }
          </p>
          <div className="meta">
            <span className="nickname">银河系</span>
            <a href="#">6</a>
            <span>114514</span>
          </div>
          <img src={ item.imgUrl }
               alt="120"/>
        </div>
      </li>
    })
  }

  componentDidMount() {
    this.props.getArtleListWithAjax()
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.ArtleList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArtleListWithAjax() {
      dispatch(getArtleListWithAjaxAction())
    },
    loadMore() {
      dispatch(loadMoreAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)