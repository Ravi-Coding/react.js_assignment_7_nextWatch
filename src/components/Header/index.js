import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdPlaylistAdd} from 'react-icons/md'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire, HiSun} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchContext from '../../NxtWatchContext.js'
import './index.css'

import {
  NavHeader,
  AppLogoImg,
  NavItems,
  ThemeButton,
  ProfileImg,
  LogoutButton,
  LogoutButtonMobile,
  PopupContainer,
  LogoutQuestion,
  OptOutContainer,
  CancelButton,
  ConfirmButton,
  MenuButton,
  MenuContainer,
  MenuItemButton,
  MenuItemName,
  MenuLinks,
  HamburgerButton,
  AppHomeButton,
} from './styledComponents'

const Header = props => {
  const logoutMe = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const navbar = (
    <NxtWatchContext.Consumer>
      {value => {
        const {
          isDarkModeOn,
          changeTheme,
          activeTabHome,
          activeTabTrending,
          activeTabGaming,
          activeTabSavedVideos,
          activeTab,
        } = value

        const updateTheme = () => {
          changeTheme()
        }

        const changeActiveToHome = () => {
          activeTabHome()
        }

        const changeActiveToTrending = () => {
          activeTabTrending()
        }

        const changeActiveToGaming = () => {
          activeTabGaming()
        }

        const changeActiveToSavedVideos = () => {
          activeTabSavedVideos()
        }

        return (
          <NavHeader bgColor={isDarkModeOn ? '#231f20' : '#fff'}>
            <Link to="/" className="link-style">
              <AppHomeButton type="button">
                <AppLogoImg
                  src={
                    isDarkModeOn === true
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </AppHomeButton>
            </Link>
            <NavItems>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={updateTheme}
                color={isDarkModeOn === true ? '#fff' : '#000'}
              >
                {isDarkModeOn === true ? <HiSun /> : <FaMoon />}
              </ThemeButton>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                trigger={
                  <HamburgerButton
                    type="button"
                    color={isDarkModeOn === true ? '#fff' : '#000'}
                  >
                    <GiHamburgerMenu />
                  </HamburgerButton>
                }
                modal
                className="pop-up-menu"
              >
                {close => (
                  <PopupContainer
                    bgColor={isDarkModeOn === true ? '#000' : '#fff'}
                  >
                    <MenuButton onClick={close}>
                      <AiOutlineClose
                        color={isDarkModeOn === true ? '#fff' : '#000'}
                      />
                    </MenuButton>
                    <MenuContainer>
                      <Link to="/" className="link-style">
                        <MenuLinks
                          bgColor={activeTab === 'HOME' ? '#ad9366' : ''}
                        >
                          <MenuItemButton
                            type="button"
                            onClick={changeActiveToHome}
                          >
                            <AiFillHome
                              size="25"
                              color={activeTab === 'HOME' ? '#fce805' : '#000'}
                            />
                            <MenuItemName
                              color={isDarkModeOn === true ? '#fff' : '000'}
                            >
                              Home
                            </MenuItemName>
                          </MenuItemButton>
                        </MenuLinks>
                      </Link>
                      <Link to="/trending" className="link-style">
                        <MenuLinks
                          bgColor={activeTab === 'TRENDING' ? '#ad9366' : ''}
                        >
                          <MenuItemButton
                            type="button"
                            onClick={changeActiveToTrending}
                          >
                            <HiFire
                              size="25"
                              color={
                                activeTab === 'TRENDING' ? '#fce805' : '#000'
                              }
                            />
                            <MenuItemName
                              color={isDarkModeOn === true ? '#fff' : '#000'}
                            >
                              Trending
                            </MenuItemName>
                          </MenuItemButton>
                        </MenuLinks>
                      </Link>
                      <Link to="/gaming" className="link-style">
                        <MenuLinks
                          bgColor={activeTab === 'GAMING' ? '#ad9366' : ''}
                        >
                          <MenuItemButton
                            type="button"
                            onClick={changeActiveToGaming}
                          >
                            <SiYoutubegaming
                              size="25"
                              color={
                                activeTab === 'GAMING' ? '#fce805' : '#000'
                              }
                            />
                            <MenuItemName
                              color={isDarkModeOn === true ? '#fff' : '#000'}
                            >
                              Gaming
                            </MenuItemName>
                          </MenuItemButton>
                        </MenuLinks>
                      </Link>
                      <Link to="/saved-videos" className="link-style">
                        <MenuLinks
                          bgColor={activeTab === 'SAVED' ? '#ad9366' : ''}
                        >
                          <MenuItemButton
                            type="button"
                            onClick={changeActiveToSavedVideos}
                          >
                            <MdPlaylistAdd
                              size="25"
                              color={activeTab === 'SAVED' ? '#fce805' : '#000'}
                            />
                            <MenuItemName
                              color={isDarkModeOn === true ? '#fff' : '#000'}
                            >
                              Saved Videos
                            </MenuItemName>
                          </MenuItemButton>
                        </MenuLinks>
                      </Link>
                    </MenuContainer>
                  </PopupContainer>
                )}
              </Popup>

              <Popup
                trigger={
                  <LogoutButton
                    type="button"
                    color={isDarkModeOn ? '#fff' : '#3b82f6'}
                  >
                    Logout
                  </LogoutButton>
                }
                modal
                className="popup-content"
              >
                {close => (
                  <PopupContainer
                    bgColor={isDarkModeOn === true ? '#000' : '#fff'}
                  >
                    <LogoutQuestion
                      color={isDarkModeOn === true ? '#fff' : '#00306e'}
                    >
                      Are you sure, you want to logout
                    </LogoutQuestion>
                    <OptOutContainer>
                      <CancelButton type="button" onClick={close}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={logoutMe}>
                        Confirm
                      </ConfirmButton>
                    </OptOutContainer>
                  </PopupContainer>
                )}
              </Popup>
              <Popup
                trigger={
                  <LogoutButtonMobile
                    type="button"
                    color={isDarkModeOn === true ? '#fff' : '#000'}
                  >
                    <FiLogOut />
                  </LogoutButtonMobile>
                }
                modal
                className="popup-content-mobile"
              >
                {close => (
                  <PopupContainer
                    bgColor={isDarkModeOn === true ? '#000' : '#fff'}
                  >
                    <LogoutQuestion
                      color={isDarkModeOn === true ? '#fff' : '#00306e'}
                    >
                      Are you sure want to logout?
                    </LogoutQuestion>
                    <OptOutContainer>
                      <CancelButton type="button" onClick={close}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={logoutMe}>
                        Confirm
                      </ConfirmButton>
                    </OptOutContainer>
                  </PopupContainer>
                )}
              </Popup>
            </NavItems>
          </NavHeader>
        )
      }}
    </NxtWatchContext.Consumer>
  )
  return navbar
}

export default withRouter(Header)
