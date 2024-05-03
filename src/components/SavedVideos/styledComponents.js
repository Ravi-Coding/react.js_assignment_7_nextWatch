import styled from 'styled-components'

export const SavedMainContainer = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
`

export const SavedContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
`
export const SavedItemContainer = styled.div`
  padding: 20px;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
`
export const SavedVideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  padding-left: 10px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`
export const IconBackground = styled.p`
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

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 600;
  color: ${props => props.color};
  margin-left: 30px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`

export const SavedFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
export const SavedFailureImg = styled.img`
  width: 400px;
  @media screen and (max-width: 768px) {
    width: 240px;
  }
`
export const SavedFailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const SavedInfoMessage = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
