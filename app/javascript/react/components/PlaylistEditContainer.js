import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getUser from "./Utilities/getUser";
import Playlist from "./Models/playlist";
import SearchResultTile from "./SearchResultTile";
import TracksListTile from "./TracksListTile";

const PlaylistEditContainer = (props) => {
  const playlistId = props.match.params.playlistId
  const initializedPlaylist = new Playlist(playlistId)
  const [user, setUser] = useState({})
  const [searchTracks, setSearchTracks] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playlist, setPlaylist] = useState(initializedPlaylist)
  const [tracks, setTracks] = useState([playlist.tracks])

  const handleGetPlaylist = async() => {
    const fetchedPlaylist = await playlist.getPlaylist()
    setTracks(tracks)
    setPlaylist(playlist)
  }

  const handleSearchChange = (event) => {
    const searchTracks = event.currentTarget.value
    setSearchTracks(searchTracks)
    performSearch(searchTracks)
  }

  const setCurrentUser = async () => {
    const user = await getUser()
    if (user) {
      setUser(user)
    }
  }

  const performSearch = async (searchTracks) => {
    try {
      const response = await fetch(`/api/v1/search?query=${searchTracks}`)
      if (!response.ok) {
        const errorMessage = `${response.status}  (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } 
      const results = await response.json()
      setSearchResults(results.tracks)
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  const searchedTracksList = searchResults.map((searchResult) => {
    return (
      <SearchResultTile
        key={searchResult.id}
        track={searchResult}
        playlistId={playlistId}
        user={props.user}
        setUser={props.setUser}
      />
    )
  })

  useEffect(() => {
    handleGetPlaylist()
    setCurrentUser()
  },[])

  let returnLink = `/playlists/${playlistId}`
  const isEditable = playlist.user_id === user.id

  return (
    <div className="playlist-edit-container">
      <div className="links">
        <Link to="/playlists">All Playlists</Link>
        <Link to={returnLink}>Return</Link>
      </div>
      <div className="edit-sections">
        <h3>Remove Tracks</h3>
        <div className="current-tracks">
          <TracksListTile
            playlist={playlist}
            playlistId={playlistId}
            tracks={playlist.tracks}
            user={user}
            setUser={setUser}
            isEditable={isEditable}
          />
        </div>
        <div className="add-tracks">
          <h3>Add Tracks</h3>
          <input onChange={handleSearchChange} value={searchTracks} placeholder="Search tracks to add!"/>
        </div>
        <div className="search-list">
          {searchedTracksList}
        </div>
      </div>
    </div>
  )
}

export default PlaylistEditContainer