import styled from 'styled-components'

export const ArtleContainer = styled.div`
  
  ul {
    width: 100%;
    
    li {
      padding-top: 15px;
      padding-bottom: 20px;
      border-bottom: 1px solid #f0f0f0;
      position:relative;
      
      .content {
        padding-right: 165px;
        
        img {
          width: 150px;
          display: block;
          position:absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          border: 1px solid #f0f0f0;
          border-radius: 3px;
        }
        
        .title {
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          color: #000;
          display: block;
          margin-bottom: 13px;
          &:hover {
            text-decoration: underline;
          }
        }
        
        p {
          font-size: 13px;
          color: #999;
          line-height: 24px;
          margin-bottom: 8px;
        }
        
        .meta {
          span, a {
            margin-right: 10px;
            font-size: 12px;
            text-decoration: none;
            color: #999;
          }
        }
      }
    }
  }
`

export const LoadMoreBtn = styled.div`
    height: 40px;
    background-color: #A5A5A5;
    border-radius: 25px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    margin-top: 30px;
`