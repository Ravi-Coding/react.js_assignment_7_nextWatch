import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
`
export const HomeMainContainer = styled.div`
  display: flex;
`

export const DisplayContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  padding: 20px;
  background-size: cover;
  display: ${props => props.displayContent};
  justify-content: space-between;
`
export const SubscriptionAd = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const AdLogo = styled.img`
  width: 154px;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`
export const BuyInfo = styled.p`
  font-size: 25px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #212121;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const GetItNow = styled.button`
  border: 1px solid #212121;
  border-radius: 2px;
  background-color: #fff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #212121;
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
export const CloseIcon = styled.button`
  background-color: transparent;
  border: 0px solid;
  cursor: pointer;
  outline: none;
  align-self: flex-start;
`
export const DisplayItemContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`
export const SearchBar = styled.input`
  padding: 6px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: 1px solid #94a3b8;
  border-radius: 4px;
  width: 400px;
  height: 36px;
  font-family: 'Roboto';
  font-size: 14px;
  outline: none;
`

export const SearchButton = styled.button`
  border: 0px solid;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  color: ${props => props.color};
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  padding-left: 10px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${props => props.bgColor};
`
export const FailureViewImg = styled.img`
  width: 400px;
  @media screen and (max-width: 768px) {
    width: 240px;
  }
`
export const InfoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const InfoMessage = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const RetryButton = styled.button`
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
