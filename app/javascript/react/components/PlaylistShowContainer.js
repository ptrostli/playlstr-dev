import React, { useState, useEffect } from "react";

const PlaylistShowContainer = (props) => {
  const [playlist, setPlaylist] = useState({
    songs: []
  })
  // const [errors, setErrors] = useState("")

  const getPlaylist = async() => {
    try {
      const playlistId = props.match.params.playlistId
      const response = await fetch(`/api/v1/playlists/${playlistId}`)
      if (!response.ok) {
        const errorMessage = `${response.status}  (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } 
      const fetchedPlaylist = await response.json()
      setPlaylist(fetchedPlaylist) // fetchedPlaylist.playlist ??
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  useEffect(() => {
    getPlaylist()
  },[])

  return (
    <div>
      <h1 className="playlist-tile">{playlist.title}</h1>
      <p className="playlist-description">{playlist.description}</p>
      <p>CREATED: {playlist.created_at}</p>
      <p>UPDATED: {playlist.updated_at}</p>
      {/* Username */}
      <ul className="playlist-songs">
        {/* SongsIndexContainer */}
      </ul>
    </div>
  )
}

export default PlaylistShowContainer