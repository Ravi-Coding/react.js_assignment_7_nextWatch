import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../NxtWatchContext.js'
import './index.css'

import {
  SavedThumbnail,
  SavedVideoInfo,
  SavedVideoList,
  SavedVideoPublished,
  SavedVideoSubText,
  SavedVideoTitle,
} from './styledComponents'

const SavedVideoItem = props => {
  const {saved} = props

  const {publishedAt, thumbnailUrl, title, viewCount, id, name} = saved

  const newUpdatedDate = formatDistanceToNow(new Date(publishedAt))

  const savedVideos = (
    <SavedVideoList>
      <Link to={`/videos/${id}`} className="link-style">
        <NxtWatchContext.Consumer>
          {value => {
            const {isDarkModeOn} = value
            return (
              <>
                <SavedThumbnail src={thumbnailUrl} alt="video thumbnail" />
                <SavedVideoInfo>
                  <SavedVideoTitle
                    color={isDarkModeOn === true ? '#fff' : '#1e293b'}
                  >
                    {title}
                  </SavedVideoTitle>
                  <SavedVideoSubText
                    color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                  >
                    {name}
                  </SavedVideoSubText>
                  <SavedVideoPublished>
                    <SavedVideoSubText
                      color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                    >
                      {viewCount} views
                    </SavedVideoSubText>
                    <SavedVideoSubText
                      color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                    >
                      .
                    </SavedVideoSubText>
                    <SavedVideoSubText
                      color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}
                    >
                      {newUpdatedDate}
                    </SavedVideoSubText>
                  </SavedVideoPublished>
                </SavedVideoInfo>
              </>
            )
          }}
        </NxtWatchContext.Consumer>
      </Link>
    </SavedVideoList>
  )

  return savedVideos
}

export default SavedVideoItem
