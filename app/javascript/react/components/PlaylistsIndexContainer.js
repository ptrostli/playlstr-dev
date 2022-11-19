import React, { useState, useEffect } from "react";
import PlaylistTile from "./PlaylistTile";

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
        playlist={playlist}
        key={playlist.id}
      />
    )
  })

  return(
    <div>
      {playlistsList}
    </div>
  )
}

export default PlaylistsIndexContainer