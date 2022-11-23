import React, { useState, useEffect } from "react";
import SongsIndexContainer from "./SongsIndexContainer";
import { Link } from 'react-router-dom'

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
    <div className="playlist-show-container">
      <h1>PlaylistShowContainer</h1>
      <h3>{playlist.title}</h3>
      <div className="playlist-information">
        {/* <h5 className="playlist-description">{playlist.description}</h5>
        <p>CREATED: {playlist.created_at}</p>
        <p>UPDATED: {playlist.updated_at}</p>
        <p>USER: {playlist.user_id} *fix later to get username* </p> */}
      </div>
      <SongsIndexContainer 
        playlist={playlist}
      />
      <Link to="/playlists">Return Home</Link>
    </div>
  )
}

export default PlaylistShowContainer