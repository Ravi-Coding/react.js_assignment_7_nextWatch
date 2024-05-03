import styled from 'styled-components'

export const SavedVideoList = styled.li`
  margin-bottom: 20px;
  max-width: 580px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    max-width: 280px;
    display: flex;
    flex-direction: column;
  }
`
export const SavedThumbnail = styled.img`
  height: 200px;
  width: 400px;
  @media screen and (max-width: 768px) {
    max-width: 280px;
  }
`
export const SavedVideoInfo = styled.div`
  max-width: 480px;
  text-align: left;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    max-width: 200px;
    margin-left: 10px;
  }
`
export const SavedVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const SavedVideoSubText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color};
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`
export const SavedVideoPublished = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
`
