import React from 'react'

const NxtWatchContext = React.createContext({
  savedVideos: [],
  updateSavedVideos: () => {},
  changeTheme: () => {},
})

export default NxtWatchContext
