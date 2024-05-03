import styled from 'styled-components'

export const GamingMainContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
`
export const GamingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
`

export const GamingTopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`
export const GamingIconBackground = styled.p`
  height: 50px;
  width: 50px;
  border: 0px solid;
  font-size: 50px;
  border-radius: 50px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    height: 30px;
    width: 30px;
    border-radius: 30px;
    font-size: 30px;
  }
`

export const GamingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 600;
  color: ${props => props.color};
  margin-left: 30px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`
export const GamingItemContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
`
export const GamingVideosListContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  padding-left: 10px;
`
export const GamingFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${props => props.bgColor};
`
export const GamingFailureImg = styled.img`
  width: 400px;
  @media screen and (max-width: 768px) {
    width: 240px;
  }
`
export const GamingFailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const GamingInfoMessage = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const GamingRetryButton = styled.button`
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
