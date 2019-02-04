import React from 'react'
import { DetailContainer, Content, Title, Main } from './DetailCSS'
import { connect } from 'react-redux'
import { getMainListAction } from './store/actionCreator'

class Detail extends React.Component{
  render() {
    console.log(this.props.match.params);
    return (
      <DetailContainer>
        <Content>
          <Title>{ this.props.title }</Title>
          <Main dangerouslySetInnerHTML={{ __html: this.props.main }}/>
        </Content>
      </DetailContainer>
    )
  }

  componentDidMount() {
    this.props.getMainList()
  }
}

const mapStateToProps = (state) => {
    return {
      title: state.detail.title,
      main: state.detail.content
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMainList() {
      dispatch(getMainListAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)