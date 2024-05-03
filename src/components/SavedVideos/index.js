import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import MenuBar from '../MenuBar'
import NxtWatchContext from '../../NxtWatchContext.js'
import SavedVideoItem from '../SavedVideoItem'

import {
  SavedMainContainer,
  SavedContentContainer,
  TopSection,
  IconBackground,
  Heading,
  SavedItemContainer,
  SavedFailureContainer,
  SavedFailureHeading,
  SavedFailureImg,
  SavedInfoMessage,
  SavedVideosListContainer,
} from './styledComponents'

const SavedVideos = () => {
  const getSavedVideos = () => {
    const displayData = (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeOn} = value

          return (
            <SavedFailureContainer>
              <SavedFailureImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <SavedFailureHeading
                color={isDarkModeOn === true ? '#fff' : '#181818'}
              >
                No saved videos found
              </SavedFailureHeading>
              <SavedInfoMessage
                color={isDarkModeOn === true ? ' #cbd5e1' : '#181818'}
              >
                you can save your videos while watching them.
              </SavedInfoMessage>
            </SavedFailureContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )

    return displayData
  }

  const nxtSaved = (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkModeOn, savedVideos} = value
        return (
          <>
            <Header />
            <SavedMainContainer
              data-testid="savedVideos"
              bgColor={isDarkModeOn === true ? '#0f0f0f' : '#f9f9f9'}
            >
              <MenuBar />
              <SavedContentContainer>
                <TopSection
                  data-testid="banner"
                  bgColor={isDarkModeOn === true ? '#181818' : '#cbd5e1'}
                >
                  <IconBackground
                    bgColor={isDarkModeOn === true ? '#181818' : '#231f20'}
                  >
                    <HiFire color="#ff0000" />
                  </IconBackground>
                  <Heading
                    color={isDarkModeOn === true ? '#f9f9f9' : '#181818'}
                  >
                    Saved Videos
                  </Heading>
                </TopSection>
                <SavedItemContainer
                  as="ul"
                  bgColor={isDarkModeOn === true ? '#0f0f0f' : '#f9f9f9'}
                >
                  {savedVideos.length === 0 ? (
                    getSavedVideos()
                  ) : (
                    <SavedVideosListContainer>
                      {savedVideos.map(eachSave => (
                        <SavedVideoItem key={eachSave.id} saved={eachSave} />
                      ))}
                    </SavedVideosListContainer>
                  )}
                </SavedItemContainer>
              </SavedContentContainer>
            </SavedMainContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return nxtSaved
}

export default SavedVideos
