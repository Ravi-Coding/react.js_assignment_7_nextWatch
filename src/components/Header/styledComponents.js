import styled from 'styled-components'

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.bgColor};
`
export const AppLogoImg = styled.img`
  width: 154px;
  @media screen and (max-width: 768px) {
    width: 100px;
  }
`
export const NavItems = styled.div`
  display: flex;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px solid;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
  font-size: 30px;
  color: ${props => props.color};
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`
export const AppHomeButton = styled(ThemeButton)`
  margin-right: 0px;
  font-size: 0px;
`

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  height: 40px;
  width: 80px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.color};
  background-color: transparent;
  border: 2px solid ${props => props.color};
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutButtonMobile = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    border: 0px solid;
    font-size: 20px;
    color: ${props => props.color};
  }
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 0px solid;
  background-color: ${props => props.bgColor};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const LogoutQuestion = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color};
  text-align: center;
`

export const OptOutContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
`
export const CancelButton = styled.button`
  border: 1px solid #212121;
  border-radius: 4px;
  background-color: #fff;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #212121;
  cursor: pointer;
  outline: none;
  height: 30px;
  width: 80px;
  margin-right: 20px;
  margin-top: 20px;
`
export const ConfirmButton = styled(CancelButton)`
  border: 0px solid;
  background-color: #3b82f6;
  color: #fff;
  margin-left: 20px;
  margin-right: 0px;
`

export const MenuButton = styled(LogoutButtonMobile)`
  color: #212121;
  align-self: flex-end;
`
export const HamburgerButton = styled(LogoutButtonMobile)`
  margin-right: 20px;
  align-self: flex-end;
  font-size: 20px;
  color: ${props => props.color};
`
export const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const MenuLinks = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`
export const MenuItemButton = styled.button`
  display: flex;
  align-items: center;
  border: 0px solid;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
export const MenuItemName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.color};
  margin-left: 20px;
`
