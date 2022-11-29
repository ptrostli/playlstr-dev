import React, { useState, useEffect } from "react";
import SongsIndexContainer from "./SongsIndexContainer";
import { Link, Redirect } from 'react-router-dom'

const PlaylistShowContainer = (props) => {
  const [playlist, setPlaylist] = useState({songs: []})
  const [redirect, setRedirect] = useState(false)
  // const [errors, setErrors] = useState("")
  
  const getPlaylist = async() => {
    const playlistId = props.match.params.playlistId
    try {
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

  const deletePlaylist = async() => {
    const playlistId = props.match.params.playlistId
    
    try {
      const response = await fetch(`/api/v1/playlists/${playlistId}`, {
        credentials: "same-origin",
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: null
      })
      if (!response.ok) {
        const errorMessage = `${response.status} - (${response.statusText})`
        const error = new Error(`${errorMessage}`)
        throw(error)
      }
      setRedirect(true)
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  useEffect(() => {
    getPlaylist()
  },[])

  if (redirect === true) {
    return <Redirect to ="/playlists"/>
  }

  return (
    <div className="playlist-show-container">
      <h1>{playlist.title}</h1>
      <div className="playlist-information">
        <h5>{playlist.description}</h5>
        <div className="playlist-timestamps">
          <p>CREATED: {playlist.created_at}</p>
          <p>UPDATED: {playlist.updated_at}</p>
        </div>
        <p>USER: {playlist.user_id} *fix later to get username* </p>
        <div className="edit-delete-buttons">
          <input type="button" value="Delete Playlist" onClick={deletePlaylist} />
          <input type="button" value="Edit Playlist (THIS DOES NOTHING YET)" />
        </div>
      </div>
      <SongsIndexContainer 
        playlist={playlist}
      />
      <div className="links">
        <Link to="/">Return Home</Link>|| 
        <Link to="/playlists">All Playlists</Link>||
        <Link to='/playlists/new'>Create Playlist</Link>
      </div>
    </div>
  )
}

export default PlaylistShowContainer