// eslint-disable-next-line
import React, {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm/index'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NxtWatchContext from './NxtWatchContext.js'
import SavedVideos from './components/SavedVideos'
import './App.css'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    savedVideos: [],
    isDarkModeOn: false,
    activeTab: 'HOME',
    closeBanner: false,
  }

  activeTabHome = () => {
    this.setState({activeTab: 'HOME'})
  }

  activeTabTrending = () => {
    this.setState({activeTab: 'TRENDING'})
  }

  activeTabGaming = () => {
    this.setState({activeTab: 'GAMING'})
  }

  activeTabSavedVideos = () => {
    this.setState({activeTab: 'SAVED'})
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkModeOn: !prevState.isDarkModeOn}))
  }

  updateSavedVideos = (videoData, id) => {
    const {savedVideos} = this.state
    const found = savedVideos.find(eachVideo => eachVideo.id === id)

    if (found === undefined) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, {...videoData, save: true}],
      }))
    } else {
      const filteredData = savedVideos.filter(eachVideo => eachVideo.id !== id)
      this.setState({savedVideos: filteredData})
    }
  }

  closeAd = () => {
    this.setState({closeBanner: true})
  }

  render() {
    const {savedVideos, isDarkModeOn, activeTab, closeBanner} = this.state
    const app = (
      <NxtWatchContext.Provider
        value={{
          savedVideos,
          updateSavedVideos: this.updateSavedVideos,
          changeTheme: this.changeTheme,
          isDarkModeOn,
          activeTab,
          activeTabHome: this.activeTabHome,
          activeTabTrending: this.activeTabTrending,
          activeTabGaming: this.activeTabGaming,
          activeTabSavedVideos: this.activeTabSavedVideos,
          closeAd: this.closeAd,
          closeBanner,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
    return app
  }
}

export default App
