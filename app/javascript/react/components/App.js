import React, { useState, useEffect }from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import TempHomePage from './TempHomePage'
import HomePage from './HomePage'
import PlaylistsIndexContainer from './PlaylistsIndexContainer'
import PlaylistShowContainer from './PlaylistShowContainer'
import NewPlaylistFormContainer from './NewPlaylistFormContainer'
import UserShowContainer from './UserShowContainer'

const App = (props) => {
  // const [user, setUser] = useState({
  //   playlists: []
  // })

  // const getUser = async () => {
  //   try {
  //     const response = await fetch('/api/v1/users')
  //     if (!response.ok) {
  //       const errorMessage = `${response.status} (${response.statusText})`
  //       const error = new Error(errorMessage)
  //       throw(error)
  //     }
  //     const fetchedUser = await response.json()
  //     setCurrentUser(fetchedUser.user)
  //   } catch(err) {
  //     console.error(`Error in fetch: ${err.message}`)
  //   }
  // }

  // useEffect(() => {
  //   getUser()
  // },[])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TempHomePage} />
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/playlists" component={PlaylistsIndexContainer} />
          <Route exact path="/playlists/new" component={NewPlaylistFormContainer} />
          <Route exact path="/playlists/:playlistId" component={PlaylistShowContainer} />
          <Route exact path="/users/:userId" component={UserShowContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
