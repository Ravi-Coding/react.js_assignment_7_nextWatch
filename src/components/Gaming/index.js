import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import MenuBar from '../MenuBar'
import GamingVideoItem from '../GamingVideoItem'
import NxtWatchContext from '../../NxtWatchContext.js'

import {
  GamingMainContainer,
  GamingContentContainer,
  GamingTopSection,
  GamingHeading,
  GamingIconBackground,
  GamingItemContainer,
  GamingFailureContainer,
  GamingFailureImg,
  GamingFailureHeading,
  GamingInfoMessage,
  GamingRetryButton,
  GamingVideosListContainer,
} from './styledComponents'

const loader = (
  <div className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
  </div>
)

const gamingApiUrl = 'https://apis.ccbp.in/videos/gaming'

const gamingStatusConst = {
  success: 'success',
  failure: 'failure',
}

class Gaming extends Component {
  state = {isLoading: true, gamingVideosData: [], gamingStatus: ''}

  componentDidMount() {
    this.getGamingVideosDetails()
  }

  onSuccessGaming = videos => {
    this.snakeCaseToCamelCase(videos)
  }

  onFailureGaming = () => {
    this.setState({gamingStatus: 'failure', isLoading: false})
  }

  getGamingVideosDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessGaming(data.videos)
    } else {
      this.onFailureGaming()
    }
  }

  snakeCaseToCamelCase = videos => {
    const updatedVideos = videos.map(eachVideo => ({
      id: eachVideo.id,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))
    this.setState({
      gamingVideosData: updatedVideos,
      gamingStatus: 'success',
      isLoading: false,
    })
  }

  renderGamingSuccessView = () => {
    const {gamingVideosData} = this.state
    const gaming = (
      <GamingVideosListContainer>
        {gamingVideosData.map(eachGaming => (
          <GamingVideoItem key={eachGaming.id} game={eachGaming} />
        ))}
      </GamingVideosListContainer>
    )
    return gaming
  }

  renderGamingFailureView = () => {
    const failure = (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          return (
            <GamingFailureContainer
              bgColor={isDarkModeOn === true ? '#181818' : '#f9f9f9'}
            >
              <GamingFailureImg
                src={
                  isDarkModeOn === true
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <GamingFailureHeading
                color={isDarkModeOn === true ? '#fff' : '#181818'}
              >
                Oops! Something Went Wrong
              </GamingFailureHeading>
              <GamingInfoMessage
                color={isDarkModeOn === true ? ' #cbd5e1' : '#181818'}
              >
                We are having some trouble to complete your request. please try
                again.
              </GamingInfoMessage>
              <GamingRetryButton
                type="button"
                onClick={this.getGamingVideosDetails}
              >
                Retry
              </GamingRetryButton>
            </GamingFailureContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
    return failure
  }

  renderDisplayGaming = () => {
    const {gamingStatus} = this.state
    switch (gamingStatus) {
      case gamingStatusConst.success:
        return this.renderGamingSuccessView()
      case gamingStatusConst.failure:
        return this.renderGamingFailureView()
      default:
        return null
    }
  }

  render() {
    const {isLoading} = this.state
    const gamingPage = (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          return (
            <>
              <Header />
              <GamingMainContainer
                data-testid="gaming"
                bgColor={isDarkModeOn === true ? '#0f0f0f' : '#f9f9f9'}
              >
                <MenuBar />
                <GamingContentContainer>
                  <GamingTopSection
                    data-testid="banner"
                    bgColor={isDarkModeOn === true ? '#181818' : '#cbd5e1'}
                  >
                    <GamingIconBackground
                      bgColor={isDarkModeOn === true ? '#181818' : '#231f20'}
                    >
                      <SiYoutubegaming color="#ff0000" />
                    </GamingIconBackground>
                    <GamingHeading
                      color={isDarkModeOn === true ? '#f9f9f9' : '#181818'}
                    >
                      Gaming
                    </GamingHeading>
                  </GamingTopSection>
                  <GamingItemContainer
                    bgColor={isDarkModeOn === true ? '#0f0f0f' : '#f9f9f9'}
                  >
                    {isLoading ? loader : this.renderDisplayGaming()}
                  </GamingItemContainer>
                </GamingContentContainer>
              </GamingMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
    return gamingPage
  }
}

export default Gaming
