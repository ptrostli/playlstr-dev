import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import HomePage from './HomePage'
import TempHomePage from './TempHomePage'
import PlaylistsIndexContainer from './PlaylistsIndexContainer'
import PlaylistShowContainer from './PlaylistShowContainer'
import NewPlaylistFormContainer from './NewPlaylistFormContainer'
// import UserShowContainer from './UserShowContainer'

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/" component={TempHomePage} />
          {/* <Route exact path="/playlists" component={PlaylistsIndexContainer} />
          <Route exact path="/playlists/new" component={NewPlaylistFormContainer} />
          <Route exact path="/playlists/:playlistId" component={PlaylistShowContainer} /> */}
          {/* <Route exact path="/users/:userId" component={UserShowContainer} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
