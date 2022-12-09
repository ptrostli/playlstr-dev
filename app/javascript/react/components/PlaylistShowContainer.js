import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';
import TracksIndexTile from "./TracksIndexTile";
import ErrorList from "./ErrorList";

const PlaylistShowContainer = (props) => {
  const [username, setUsername] = useState("")
  const [playlist, setPlaylist] = useState({
    tracks: [],
  })
  const [redirect, setRedirect] = useState(false)
  const [errors, setErrors] = useState("")
  
  const playlistId = props.match.params.playlistId

  const getPlaylist = async() => {
    try {
      const response = await fetch(`/api/v1/playlists/${playlistId}`)
      if (!response.ok) {
        const errorMessage = `${response.status}  (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } 
      const fetchedPlaylist = await response.json()
      setPlaylist(fetchedPlaylist)
      setUsername(fetchedPlaylist.user.username)
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  const deletePlaylist = async() => {
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

  let createdAt
  let updatedAt
  if (playlist.created_at) {
    const created = new Date(playlist.created_at)
    createdAt = `${created.toLocaleTimeString()} - ${created.toLocaleDateString()}`
  }
  if (playlist.updated_at) {
    const updated = new Date(playlist.updated_at)
    updatedAt =`${updated.toLocaleTimeString()} - ${updated.toLocaleDateString()}`
  }

  if (redirect === true) {
    return <Redirect to ="/playlists"/>
  }

  return (
    <div className="playlist-show-container">
      <h1 className="header">{playlist.title}</h1>
      <div className="playlist-information">
        <h5>{playlist.description}</h5>
        <div className="playlist-timestamps">
          <p>CREATED: {createdAt}</p>
          <p>UPDATED: {updatedAt}</p>
        </div>
        <p>Submitted by: {username}</p>
      </div>
      <div className="edit-or-delete">
          <input type="button" value="Delete Playlist" onClick={deletePlaylist} />
          <Link to={`/playlists/${playlistId}/edit`}><input type="button" value="Edit Playlist"/></Link>
        </div>
      <TracksIndexTile 
        playlist={playlist}
      />
      <div className="links">
        <Link to="/">Return Home</Link>
        <Link to="/playlists">All Playlists</Link>
      </div>
    </div>
  )
}

export default PlaylistShowContainer