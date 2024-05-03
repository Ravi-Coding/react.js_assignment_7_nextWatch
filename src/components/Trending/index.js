import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {HiFire} from 'react-icons/hi'

import {
  TrendingMainContainer,
  TrendingContentContainer,
  TrendingVideosListContainer,
  TrendingItemContainer,
  TopSection,
  IconBackground,
  Heading,
  TrendingFailureContainer,
  TrendingFailureImg,
  TrendingFailureHeading,
  TrendingInfoMessage,
  TrendingRetryButton,
} from './styledComponents'

import Header from '../Header'
import MenuBar from '../MenuBar'
import TrendingVideoItem from '../TrendingVideoItem'
import NxtWatchContext from '../../NxtWatchContext.js'

const trendingApiUrl = 'https://apis.ccbp.in/videos/trending'

const trendingStatusConst = {
  success: 'success',
  failure: 'failure',
}

const loader = (
  <div className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
  </div>
)

class Trending extends Component {
  state = {trendingVideos: [], trendingStatus: '', isLoading: true}

  componentDidMount() {
    this.getTrendingVideosDetails()
  }

  onSuccessTrending = videos => {
    this.snakeCaseToCamelCase(videos)
  }

  renderFailureTrending = () => {
    this.setState({trendingStatus: 'failure', isLoading: false})
  }

  getTrendingVideosDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessTrending(data.videos)
    } else {
      this.renderFailureTrending()
    }
  }

  snakeCaseToCamelCase = videos => {
    const updatedVideos = videos.map(eachVideo => ({
      channel: eachVideo.channel,
      id: eachVideo.id,
      publishedAt: eachVideo.published_at,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))
    this.setState({
      trendingVideos: updatedVideos,
      trendingStatus: 'success',
      isLoading: false,
    })
  }

  renderTrendingSuccessView = () => {
    const {trendingVideos} = this.state
    const trending = (
      <TrendingVideosListContainer>
        {trendingVideos.map(eachTrending => (
          <TrendingVideoItem key={eachTrending.id} trends={eachTrending} />
        ))}
      </TrendingVideosListContainer>
    )
    return trending
  }

  renderTrendingFailureView = () => {
    const failure = (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          return (
            <TrendingFailureContainer
              bgColor={isDarkModeOn === true ? '#181818' : '#f9f9f9'}
            >
              <TrendingFailureImg
                src={
                  isDarkModeOn === true
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <TrendingFailureHeading
                color={isDarkModeOn === true ? '#fff' : '#181818'}
              >
                Oops! Something Went Wrong
              </TrendingFailureHeading>
              <TrendingInfoMessage
                color={isDarkModeOn === true ? ' #cbd5e1' : '#181818'}
              >
                We are having some trouble to complete your request. please try
                again.
              </TrendingInfoMessage>
              <TrendingRetryButton
                type="button"
                onClick={this.getTrendingVideosDetails}
              >
                Retry
              </TrendingRetryButton>
            </TrendingFailureContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
    return failure
  }

  renderDisplayTrending = () => {
    const {trendingStatus} = this.state
    switch (trendingStatus) {
      case trendingStatusConst.success:
        return this.renderTrendingSuccessView()
      case trendingStatusConst.failure:
        return this.renderTrendingFailureView()
      default:
        return null
    }
  }

  render() {
    const {isLoading} = this.state

    const nxtTrend = (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          return (
            <>
              <Header />
              <TrendingMainContainer
                data-testid="trending"
                bgColor={isDarkModeOn === true ? '#0f0f0f' : '#f9f9f9'}
              >
                <MenuBar />
                <TrendingContentContainer>
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
                      Trending
                    </Heading>
                  </TopSection>
                  <TrendingItemContainer
                    bgColor={isDarkModeOn === true ? '#0f0f0f' : '#f9f9f9'}
                  >
                    {isLoading ? loader : this.renderDisplayTrending()}
                  </TrendingItemContainer>
                </TrendingContentContainer>
              </TrendingMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )

    return nxtTrend
  }
}

export default Trending
