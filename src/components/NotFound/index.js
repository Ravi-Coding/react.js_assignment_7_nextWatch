import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundMessage,
  NotFoundMainContainer,
} from './styledComponents'

import Header from '../Header'
import MenuBar from '../MenuBar'
import NxtWatchContext from '../../NxtWatchContext.js'

const NotFound = () => {
  const notfound = (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        return (
          <>
            <Header />
            <NotFoundMainContainer
              bgColor={isDarkModeOn === true ? '#0f0f0f' : '#f9f9f9'}
            >
              <MenuBar />
              <NotFoundContainer
                bgColor={isDarkModeOn === true ? '#0f0f0f' : '#f9f9f9'}
              >
                <NotFoundImg
                  src={
                    isDarkModeOn === true
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                  }
                  alt="not found"
                />
                <NotFoundHeading
                  color={isDarkModeOn === true ? '#fff' : '#181818'}
                >
                  Page Not Found
                </NotFoundHeading>
                <NotFoundMessage
                  color={isDarkModeOn === true ? ' #cbd5e1' : '#181818'}
                >
                  we are sorry, the page you requested could not be found.
                </NotFoundMessage>
              </NotFoundContainer>
            </NotFoundMainContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
  return notfound
}

export default NotFound
