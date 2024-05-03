import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../NxtWatchContext.js'
import './index.css'

import {
  TrendingVideoList,
  TrendingVideoInfo,
  TrendingThumbnail,
  TrendingVideoTitle,
  TrendingVideoSubText,
  TrendingVideoPublished,
} from './styledComponents'

const TrendingVideoItem = props => {
  const {trends} = props
  const {channel} = trends

  const updatedChannel = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }

  const {publishedAt, thumbnailUrl, title, viewCount, id} = trends

  const {name} = updatedChannel

  const newUpdatedDate = formatDistanceToNow(new Date(publishedAt))

  const trendingVideos = (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        return (
          <Link to={`/videos/${id}`} className="link-style">
            <TrendingVideoList>
              <TrendingThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <TrendingVideoInfo>
                <TrendingVideoTitle
                  color={isDarkModeOn === true ? '#fff' : '#1e293b'}
                >
                  {title}
                </TrendingVideoTitle>
                <TrendingVideoSubText
                  color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                >
                  {name}
                </TrendingVideoSubText>
                <TrendingVideoPublished>
                  <TrendingVideoSubText
                    color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                  >
                    {viewCount} views
                  </TrendingVideoSubText>
                  <TrendingVideoSubText
                    color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                  >
                    {newUpdatedDate} ago
                  </TrendingVideoSubText>
                  {/* <TrendingVideoSubText
                    color={isDarkModeOn === true ? ' #cbd5e1' : '#181818'}
                  >
                    
                  </TrendingVideoSubText> */}
                </TrendingVideoPublished>
              </TrendingVideoInfo>
            </TrendingVideoList>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  return trendingVideos
}

export default TrendingVideoItem
