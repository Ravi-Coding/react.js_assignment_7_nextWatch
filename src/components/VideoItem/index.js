import {Link} from 'react-router-dom'
import './index.css'

import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../NxtWatchContext.js'

import {
  VideoList,
  ThumbnailImg,
  ProfileVideoContainer,
  VideoProfileImg,
  VideoInfoContainer,
  TitleHeading,
  SubText,
  ViewsPublishContainer,
} from './styledComponents'

const VideoItem = props => {
  const {video} = props
  const {channel} = video

  const updatedChannel = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }

  const {publishedAt, thumbnailUrl, title, viewCount, id} = video

  const {name, profileImageUrl} = updatedChannel

  const newUpdatedDate = formatDistanceToNow(new Date(publishedAt))

  const videoItems = (
    <Link to={`/videos/${id}`} className="list-style">
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkModeOn} = value
          return (
            <>
              <VideoList>
                <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
                <ProfileVideoContainer>
                  <VideoProfileImg src={profileImageUrl} alt="channel logo" />
                  <VideoInfoContainer>
                    <TitleHeading
                      color={isDarkModeOn === true ? ' #f4f4f4' : '#1e293b'}
                    >
                      {title}
                    </TitleHeading>
                    <SubText
                      color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                    >
                      {name}
                    </SubText>
                    <ViewsPublishContainer>
                      <SubText
                        color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                      >
                        {viewCount} views
                      </SubText>
                      <SubText
                        color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                      >
                        .
                      </SubText>
                      <SubText
                        color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                      >
                        {newUpdatedDate}
                      </SubText>
                    </ViewsPublishContainer>
                  </VideoInfoContainer>
                </ProfileVideoContainer>
              </VideoList>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    </Link>
  )

  return videoItems
}

export default VideoItem
