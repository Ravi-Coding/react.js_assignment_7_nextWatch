import styled from 'styled-components'

export const VideoMainContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
`

export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`
export const VideoItemContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  width: 100%;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`

export const VideoInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`
export const VideoViewLikesCont = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`
export const CustomText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.color};
  margin-right: 20px;
`

export const CustomButton = styled.button`
  font-family: 'Roboto';
  font-size: ${props => props.size};
  font-weight: 500;
  color: ${props => props.color};
  background-color: transparent;
  border: 0px solid;
  cursor: pointer;
  outline: none;
  margin-right: 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`
export const HrLine = styled.hr`
  width: 100%;
  color: #94a3b8;
`

export const ChannelInfoContainer = styled.div`
  display: flex;
  padding: 10px;
`
export const ChannelLogo = styled.img`
  height: 50px;
  width: 50px;
`

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`
export const VideoFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color=${props => props.bgColor};
`
export const VideoFailureImg = styled.img`
  width: 400px;
  @media screen and (max-width: 768px) {
    width: 240px;
  }
`
export const VideoFailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const VideoInfoMessage = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const VideoRetryButton = styled.button`
  border: 0px solid;
  border-radius: 4px;
  background-color: #00306e;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  outline: none;
  height: 50px;
  width: 120px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 32px;
    font-size: 12px;
  }
`
