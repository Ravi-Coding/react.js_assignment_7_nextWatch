import styled from 'styled-components'

export const GameCard = styled.li`
  max-width: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
`
export const GameCardThumbnail = styled.img`
  width: 280px;
  @media screen and (max-width: 768px) {
    width: 180px;
  }
`
export const GameTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.color};
`
export const GameViews = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.color};
`
