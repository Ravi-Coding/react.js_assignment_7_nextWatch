import {Link} from 'react-router-dom'

import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'

import NxtWatchContext from '../../NxtWatchContext.js'

import {
  NavContainer,
  NavLinks,
  NavItemButton,
  NavItemName,
  ToolbarContainer,
  Footer,
  ContactUs,
  SocialMediaImg,
  SocialMediaApps,
  Message,
} from './styledComponents'

import './index.css'

const MenuBar = () => {
  const menubar = (
    <NxtWatchContext.Consumer>
      {value => {
        const {
          isDarkModeOn,
          activeTabHome,
          activeTabTrending,
          activeTabGaming,
          activeTabSavedVideos,
          activeTab,
        } = value

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
          <ToolbarContainer bgColor={isDarkModeOn ? '#231f20' : '#fff'}>
            <NavContainer>
              <Link to="/" className="menu-nav-links">
                <NavLinks bgColor={activeTab === 'HOME' ? '#ad9366' : ''}>
                  <NavItemButton type="button" onClick={changeActiveToHome}>
                    <AiFillHome
                      size="25"
                      color={activeTab === 'HOME' ? '#fce805' : '#000'}
                    />
                    <NavItemName
                      color={isDarkModeOn === true ? '#fff' : '#000'}
                    >
                      Home
                    </NavItemName>
                  </NavItemButton>
                </NavLinks>
              </Link>
              <Link to="/trending" className="menu-nav-links">
                <NavLinks bgColor={activeTab === 'TRENDING' ? '#ad9366' : ''}>
                  <NavItemButton type="button" onClick={changeActiveToTrending}>
                    <HiFire
                      size="25"
                      color={activeTab === 'TRENDING' ? '#fce805' : '#000'}
                    />
                    <NavItemName color={isDarkModeOn ? '#fff' : '#000'}>
                      Trending
                    </NavItemName>
                  </NavItemButton>
                </NavLinks>
              </Link>
              <Link to="/gaming" className="menu-nav-links">
                <NavLinks bgColor={activeTab === 'GAMING' ? '#ad9366' : ''}>
                  <NavItemButton type="button" onClick={changeActiveToGaming}>
                    <SiYoutubegaming
                      size="25"
                      color={activeTab === 'GAMING' ? '#fce805' : '#000'}
                    />
                    <NavItemName color={isDarkModeOn ? '#fff' : '#000'}>
                      Gaming
                    </NavItemName>
                  </NavItemButton>
                </NavLinks>
              </Link>
              <Link to="/saved-videos" className="menu-nav-links">
                <NavLinks bgColor={activeTab === 'SAVED' ? '#ad9366' : ''}>
                  <NavItemButton
                    type="button"
                    onClick={changeActiveToSavedVideos}
                  >
                    <MdPlaylistAdd
                      size="25"
                      color={activeTab === 'SAVED' ? '#fce805' : '#000'}
                    />
                    <NavItemName color={isDarkModeOn ? '#fff' : '#000'}>
                      Saved Videos
                    </NavItemName>
                  </NavItemButton>
                </NavLinks>
              </Link>
            </NavContainer>
            <Footer>
              <ContactUs color={isDarkModeOn ? '#fff' : '#475569'}>
                CONTACT US
              </ContactUs>
              <SocialMediaApps>
                <SocialMediaImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialMediaImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />

                <SocialMediaImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaApps>
              <Message color={isDarkModeOn ? '#fff' : '#475569'}>
                Enjoy! Now to see your channels and recommendations!
              </Message>
            </Footer>
          </ToolbarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
  return menubar
}

export default MenuBar
