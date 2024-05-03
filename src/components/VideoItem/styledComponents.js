import styled from 'styled-components'

export const VideoList = styled.li`
  margin-right: 20px;
  margin-bottom: 20px;
  max-width: 280px;
  @media screen and (max-width: 576px) {
    max-width: 200px;
  }
`
export const ThumbnailImg = styled.img`
  width: 280px;
  @media screen and (max-width: 576px) {
    max-width: 200px;
  }
`
export const ProfileVideoContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const VideoProfileImg = styled.img`
  height: 36px;
  width: 36px;
  margin-top: 10px;
  @media screen and (max-width: 576px) {
    height: 25px;
    width: 25px;
  }
`
export const VideoInfoContainer = styled.div`
  max-width: 220px;
  text-align: left;
  margin-left: 20px;
  @media screen and (max-width: 576px) {
    max-width: 150px;
    margin-left: 10px;
  }
`
export const TitleHeading = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color};
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`
export const SubText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color};
  margin-right: 20px;
  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`
export const ViewsPublishContainer = styled.div`
  display: flex;
  align-items: center;
`
