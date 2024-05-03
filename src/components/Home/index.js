import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import VideoItem from '../VideoItem'
import MenuBar from '../MenuBar'
import NxtWatchContext from '../../NxtWatchContext.js'

import {
  HomeContainer,
  HomeMainContainer,
  DisplayContentContainer,
  BannerContainer,
  AdLogo,
  BuyInfo,
  GetItNow,
  SubscriptionAd,
  CloseIcon,
  DisplayItemContainer,
  SearchContainer,
  SearchBar,
  SearchButton,
  VideosListContainer,
  FailureViewContainer,
  FailureViewImg,
  InfoHeading,
  InfoMessage,
  RetryButton,
} from './styledComponents'

import './index.css'

const videoStatusConstants = {
  success: 'success',
  failure: 'failure',
  empty: 'empty',
}

const loader = (
  <div className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
  </div>
)

class Home extends Component {
  state = {
    videoFilesData: [],
    searchInput: '',
    status: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getContentDetails()
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

    // console.log(updatedVideos)

    this.setState({
      videoFilesData: updatedVideos,
      status: 'success',
      isLoading: false,
    })
  }

  onSuccessView = videos => {
    if (videos.length === 0) {
      this.setState({status: 'empty', isLoading: false})
      console.log('yes')
    } else {
      this.snakeCaseToCamelCase(videos)
    }
  }

  onFailureView = () => {
    this.setState({status: 'failure', isLoading: false})
  }

  renderDisplayFailureView = () => {
    const failure = (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          return (
            <FailureViewContainer
              bgColor={isDarkModeOn === true ? '#181818' : '#f9f9f9'}
            >
              <FailureViewImg
                src={
                  isDarkModeOn === true
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <InfoHeading color={isDarkModeOn === true ? '#fff' : '#181818'}>
                Oops! Something Went Wrong
              </InfoHeading>
              <InfoMessage
                color={isDarkModeOn === true ? ' #cbd5e1' : '#181818'}
              >
                We are having some trouble to complete your request. please try
                again.
              </InfoMessage>
              <RetryButton type="button" onClick={this.getContentDetails}>
                Retry
              </RetryButton>
            </FailureViewContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
    return failure
  }

  renderNoSearchResultView = () => {
    const noResult = (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          return (
            <FailureViewContainer
              bgColor={isDarkModeOn === true ? '#181818' : '#f9f9f9'}
            >
              <FailureViewImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <InfoHeading color={isDarkModeOn === true ? '#fff' : '#181818'}>
                No Search results found
              </InfoHeading>
              <InfoMessage
                color={isDarkModeOn === true ? ' #cbd5e1' : '#181818'}
              >
                Try different key words or remove search filter
              </InfoMessage>
              <RetryButton type="button" onClick={this.getContentDetails}>
                Retry
              </RetryButton>
            </FailureViewContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
    return noResult
  }

  getContentDetails = async () => {
    const {searchInput} = this.state
    const homeRouteApi = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeRouteApi, options)
    const data = await response.json()
    if (response.ok === true) {
      const {videos} = data
      this.onSuccessView(videos)
    } else {
      this.onFailureView()
    }
  }

  renderDisplayVideoItem = () => {
    const {videoFilesData} = this.state
    const videos = (
      <VideosListContainer>
        {videoFilesData.map(eachVideo => (
          <VideoItem key={eachVideo.id} video={eachVideo} />
        ))}
      </VideosListContainer>
    )
    return videos
  }

  renderVideoStatus = () => {
    const {status} = this.state
    switch (status) {
      case videoStatusConstants.success:
        return this.renderDisplayVideoItem()
      case videoStatusConstants.failure:
        return this.renderDisplayFailureView()
      case videoStatusConstants.empty:
        return this.renderNoSearchResultView()
      default:
        return null
    }
  }

  onChangeSearchContent = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {isLoading} = this.state

    const homePage = (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeOn, closeAd, closeBanner} = value
          const closeBannerItem = () => {
            closeAd()
          }

          return (
            <HomeContainer>
              <Header />
              <HomeMainContainer>
                <MenuBar />
                <DisplayContentContainer
                  data-testid="home"
                  bgColor={isDarkModeOn === true ? '#181818' : '#f9f9f9'}
                >
                  <BannerContainer
                    displayContent={closeBanner === true ? 'none' : 'flex'}
                    data-testid="banner"
                  >
                    <SubscriptionAd>
                      <AdLogo
                        alt="nxt watch logo"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      />
                      <BuyInfo>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BuyInfo>
                      <GetItNow type="button">GET IT NOW</GetItNow>
                    </SubscriptionAd>
                    <CloseIcon
                      type="button"
                      onClick={closeBannerItem}
                      data-testid="close"
                    >
                      <AiOutlineClose size="25" />
                    </CloseIcon>
                  </BannerContainer>
                  <DisplayItemContainer
                    bgColor={isDarkModeOn === true ? '#181818' : '#f9f9f9'}
                  >
                    <SearchContainer>
                      <SearchBar
                        type="search"
                        placeholder="Search"
                        onChange={this.onChangeSearchContent}
                        bgColor={isDarkModeOn === true ? '#181818' : '#ffffff'}
                        color={isDarkModeOn === true ? '#e2e8f0' : '#181818'}
                      />
                      <SearchButton
                        type="button"
                        onClick={this.getContentDetails}
                        data-testid="searchButton"
                        color={isDarkModeOn === true ? '#e2e8f0' : '#181818'}
                      >
                        <BsSearch size="22" />
                      </SearchButton>
                    </SearchContainer>
                    {isLoading ? loader : this.renderVideoStatus()}
                  </DisplayItemContainer>
                </DisplayContentContainer>
              </HomeMainContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
    return homePage
  }
}

export default Home
