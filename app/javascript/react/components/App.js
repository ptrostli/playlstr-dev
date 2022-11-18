import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import PlaylistsIndexContainer from './PlaylistsIndexContainer'

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PlaylistsIndexContainer} />
          <Route exact path="/playlists" component={PlaylistsIndexContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
