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

  // cant delete because its on the same page?
  const deletePlaylist = async() => {
    const playlistId = props.match.params.playlistId
    setRedirect(true)
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
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  if (redirect === true) {
    return <Redirect to ="/playlists"/>
  }

  useEffect(() => {
    getPlaylist()
  },[])

  return (
    <div className="playlist-show-container">
      <h1>PlaylistShowContainer</h1>
      <h3>{playlist.title}</h3>
      <div className="playlist-information">
        <h5 className="playlist-description">{playlist.description}</h5>
        <p>CREATED: {playlist.created_at}</p>
        <p>UPDATED: {playlist.updated_at}</p>
        {/* <p>USER: {playlist.user_id} *fix later to get username* </p> */}
        <div className="edit-delete-buttons">
          <input type="button" value="Delete Playlist" onClick={deletePlaylist} />
        </div>
      </div>
      <SongsIndexContainer 
        playlist={playlist}
      />
      <Link to="/">Return Home</Link>|| 
      <Link to="/playlists">All Playlists</Link>||
      <Link to='/playlists/new'>Create Playlist</Link>
    </div>
  )
}

export default PlaylistShowContainer