import styled from 'styled-components'

export const TrendingVideoList = styled.li`
  margin-bottom: 20px;
  max-width: 580px;
  display: flex;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    max-width: 280px;
    display: flex;
    flex-direction: column;
  }
`
export const TrendingThumbnail = styled.img`
  width: 500px;
  @media screen and (max-width: 768px) {
    max-width: 280px;
  }
`
export const TrendingVideoInfo = styled.div`
  max-width: 480px;
  text-align: left;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    max-width: 200px;
    margin-left: 10px;
  }
`
export const TrendingVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const TrendingVideoSubText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color};
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`
export const TrendingVideoPublished = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`
