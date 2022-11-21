import React, { useState, useEffect } from "react";
import PlaylistTile from "./PlaylistTile";
import { Link } from "react-router-dom";
// import SongsIndexContainer from "./SongsIndexContainer";

const PlaylistsIndexContainer = (props) => {
  const [playlists, setPlaylists] = useState([])
  // Following line is for the future
  // const [featuredPlaylist, setFeaturedPlaylist] = useState({})

  const getPlaylists = async() => {
    try {
      const response = await fetch("api/v1/playlists")
      if (!response.ok) {
        const errorMessage = `${response.status} -- (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedPlaylists = await response.json()
      setPlaylists(fetchedPlaylists)
      // Following line is for the future
      // setFeaturedPlaylist(fetchedPlaylists.playlists[Math.floor(Math.random() * fetchedPlaylists.playlists.length)])
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }
  
  useEffect(() => {
    getPlaylists()
  }, [])

  const playlistsList = playlists.map((playlist) => {
    return (
      <PlaylistTile 
      key={playlist.id}
      playlist={playlist}
      />
    )
  })

  return(
    <div className="playlists-index">
      <h1>PlaylistsIndexContainer</h1>
      {playlistsList}
      <Link to='/playlists/new'>Create Playlist</Link>
    </div>
  )
}

export default PlaylistsIndexContainer