import {Link} from 'react-router-dom'

import NxtWatchContext from '../../NxtWatchContext.js'

import {
  GameCard,
  GameCardThumbnail,
  GameTitle,
  GameViews,
} from './styledComponents'

import './index.css'

const GamingVideoItem = props => {
  const {game} = props
  const {thumbnailUrl, title, viewCount, id} = game
  const gamingItem = (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkModeOn} = value
        return (
          <Link to={`/videos/${id}`} className="link-style">
            <GameCard>
              <GameCardThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle color={isDarkModeOn === true ? ' #f4f4f4' : '#1e293b'}>
                {title}
              </GameTitle>
              <GameViews color={isDarkModeOn === true ? ' #cbd5e1' : '#475569'}>
                {viewCount} Watching Worldwide
              </GameViews>
            </GameCard>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
  return gamingItem
}

export default GamingVideoItem
