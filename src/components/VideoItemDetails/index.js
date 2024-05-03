import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../NxtWatchContext.js'

import Header from '../Header'
import MenuBar from '../MenuBar'

import './index.css'

import {
  VideoItemDetailsContainer,
  VideoItemContainer,
  VideoInfoContainer,
  VideoTitle,
  VideoViewLikesCont,
  CustomText,
  CustomButton,
  ChannelInfoContainer,
  ChannelLogo,
  CustomContainer,
  Description,
  VideoFailureContainer,
  VideoFailureImg,
  VideoFailureHeading,
  VideoInfoMessage,
  VideoRetryButton,
  VideoMainContainer,
  HrLine,
} from './styledComponents'

const videoStatusConst = {
  success: 'success',
  failure: 'failure',
}

const loader = (
  <div className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
  </div>
)

class VideoItemDetails extends Component {
  state = {
    videoData: {},
    videoStatus: '',
    isLoading: true,
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoInformation()
  }

  onSuccessVideoData = videoDetails => {
    const {channel} = videoDetails

    const updatedChannel = {
      name: channel.name,
      profileImageUrl: channel.profile_image_url,
      subscriberCount: channel.subscriber_count,
    }
    const updatedData = {
      id: videoDetails.id,
      description: videoDetails.description,
      publishedAt: videoDetails.published_at,
      thumbnailUrl: videoDetails.thumbnail_url,
      title: videoDetails.title,
      videoUrl: videoDetails.video_url,
      viewCount: videoDetails.view_count,
    }
    const finalData = {...updatedChannel, ...updatedData}
    this.setState({
      videoData: finalData,
      videoStatus: 'success',
      isLoading: false,
    })
  }

  onFailureVideoData = () => {
    this.setState({videoStatus: 'failure', isLoading: false})
  }

  renderVideoFailureView = () => {
    const failure = (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          return (
            <VideoFailureContainer
              bgColor={isDarkModeOn === true ? '#181818' : '#f9f9f9'}
            >
              <VideoFailureImg
                src={
                  isDarkModeOn === true
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <VideoFailureHeading
                color={isDarkModeOn === true ? '#fff' : '#181818'}
              >
                Oops! Something Went Wrong
              </VideoFailureHeading>
              <VideoInfoMessage
                color={isDarkModeOn === true ? ' #cbd5e1' : '#181818'}
              >
                We are having some trouble to complete your request. please try
                again.
              </VideoInfoMessage>
              <VideoRetryButton
                type="button"
                onClick={this.getVideoInformation}
              >
                Retry
              </VideoRetryButton>
            </VideoFailureContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
    return failure
  }

  toggleLikeBtn = () => {
    this.setState({like: true, dislike: false})
  }

  toggleDislikeBtn = () => {
    this.setState({dislike: true, like: false})
  }

  renderVideoDetailsSuccessView = () => {
    const {videoData, like, dislike} = this.state
    const {id} = videoData
    const success = (
      <NxtWatchContext.Consumer>
        {value => {
          const {savedVideos, updateSavedVideos, isDarkModeOn} = value
          const found = savedVideos.find(eachVideo => eachVideo.id === id)
          const newData = found === undefined ? videoData : found
          const {
            description,
            name,
            profileImageUrl,
            publishedAt,
            subscriberCount,
            title,
            videoUrl,
            viewCount,
            save,
          } = newData

          const newUpdatedDate = formatDistanceToNow(new Date(publishedAt))

          const toggleSaveBtn = () => {
            updateSavedVideos(videoData, id)
          }

          return (
            <VideoItemContainer
              bgColor={isDarkModeOn === true ? '#0f0f0f' : '#f9f9f9'}
            >
              <ReactPlayer url={videoUrl} width="100%" controls />
              <VideoTitle color={isDarkModeOn === true ? '#fff' : '#1e293b'}>
                {title}
              </VideoTitle>
              <VideoInfoContainer>
                <VideoViewLikesCont>
                  <CustomText
                    color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                  >
                    {viewCount} views
                  </CustomText>
                  <CustomText
                    color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                  >
                    .
                  </CustomText>
                  <CustomText
                    color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                  >
                    {newUpdatedDate}
                  </CustomText>
                </VideoViewLikesCont>
                <VideoViewLikesCont>
                  <CustomButton
                    type="button"
                    onClick={this.toggleLikeBtn}
                    color={like === true ? '#2563eb' : '#64748b'}
                    size={like === true ? '16px' : '14px'}
                  >
                    <BiLike size="18" className="icon" /> Like
                  </CustomButton>
                  <CustomButton
                    type="button"
                    onClick={this.toggleDislikeBtn}
                    color={dislike === true ? '#2563eb' : '#64748b'}
                    size={dislike === true ? '16px' : '14px'}
                  >
                    <BiDislike size="18" className="icon" /> Dislike
                  </CustomButton>

                  {save === true ? (
                    <CustomButton
                      type="button"
                      onClick={toggleSaveBtn}
                      color={save === true ? '#2563eb' : '#64748b'}
                      size={save === true ? '16px' : '14px'}
                    >
                      <MdPlaylistAdd size="18" className="icon" /> Saved
                    </CustomButton>
                  ) : (
                    <CustomButton
                      type="button"
                      onClick={toggleSaveBtn}
                      color={save === true ? '#2563eb' : '#64748b'}
                      size={save === true ? '16px' : '14px'}
                    >
                      <MdPlaylistAdd size="18" className="icon" /> Save
                    </CustomButton>
                  )}
                </VideoViewLikesCont>
              </VideoInfoContainer>
              <HrLine />
              <ChannelInfoContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <CustomContainer>
                  <CustomText
                    color={isDarkModeOn === true ? ' #f4f4f4' : '#1e293b'}
                  >
                    {name}
                  </CustomText>
                  <CustomText
                    color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                  >
                    {subscriberCount}
                  </CustomText>
                  <Description
                    color={isDarkModeOn === true ? ' #cbd5e1' : '#313131'}
                  >
                    {description}
                  </Description>
                </CustomContainer>
              </ChannelInfoContainer>
            </VideoItemContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
    return success
  }

  getVideoInformation = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoItemApi = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoItemApi, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccessVideoData(data.video_details)
    } else {
      this.onFailureVideoData()
    }
  }

  renderVideoDetails = () => {
    const {videoStatus} = this.state
    switch (videoStatus) {
      case videoStatusConst.success:
        return this.renderVideoDetailsSuccessView()
      case videoStatusConst.failure:
        return this.renderVideoFailureView()
      default:
        return null
    }
  }

  render() {
    const {isLoading} = this.state
    const playVideo = (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          return (
            <>
              <Header />
              <VideoMainContainer
                data-testid="videoItemDetails"
                bgColor={isDarkModeOn === true ? '#0f0f0f' : '#f9f9f9'}
              >
                <MenuBar />
                <VideoItemDetailsContainer
                  bgColor={isDarkModeOn === true ? '#0f0f0f' : '#f9f9f9'}
                >
                  {isLoading ? loader : this.renderVideoDetails()}
                </VideoItemDetailsContainer>
              </VideoMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
    return playVideo
  }
}

export default VideoItemDetails
