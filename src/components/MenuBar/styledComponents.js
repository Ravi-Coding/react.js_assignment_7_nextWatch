import styled from 'styled-components'

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 240px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const NavLinks = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  border-radius: 2px;
  margin-bottom: 20px;
`
export const NavItemButton = styled.button`
  display: flex;
  align-items: center;
  border: 0px solid;
  background-color: transparent};
  cursor: pointer;
  outline: none;
  width: 100%;
  &:hover {
    background-color: #fa0c38;
  }
 
`
export const NavItemName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.color};
  margin-left: 20px;
`
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const ContactUs = styled.p`
  font-family: 'Roboto';
  font-size: '18px';
  color: ${props => props.color};
`
export const SocialMediaApps = styled.div`
  display: flex;
  align-items: center;
`
export const SocialMediaImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const Message = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.color};
`
