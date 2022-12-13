import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';
import PlaylistEditContainer from "./PlaylistEditContainer";
import TracksListTile from "./TracksListTile";
import ErrorList from "./ErrorList";

const PlaylistShowContainer = (props) => {
  const [redirect, setRedirect] = useState(false)
  const [username, setUsername] = useState("")
  const [tracks, setTracks] = useState([])
  const [playlist, setPlaylist] = useState({
    tracks: [tracks],
  })
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
      setTracks(fetchedPlaylist.tracks)
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

  const handlePlaylistChange = (event) => {
    props.setTracks({
      ...props.tracks,
      [event.currentTarget.name]: event.currentTarget.value
    })
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
      <div className="links">
        <Link to="/">Return Home</Link>
        <Link to="/playlists">All Playlists</Link>
      </div>
      <div className="playlist-information">
        <h1 className="header">{playlist.title}</h1>
        <h5>{playlist.description}</h5>
        <div className="submission-information">
          <p>CREATED: {createdAt}</p>
          <p>UPDATED: {updatedAt}</p>
        </div>
        <p>Submitted by: <strong>{username}</strong></p>
        <div className="edit-or-delete">
          <input type="button" value="Delete Playlist" onClick={deletePlaylist} />
          <Link to={`/playlists/${playlistId}/edit`}><input type="button" value="Edit Playlist"/></Link>
        </div>
      </div>
      {/* <PlaylistEditContainer 
        playlist={playlist}
        playlistId={playlistId}
        setPlaylist={setPlaylist}
        getPlaylist={getPlaylist}
      /> */}
      <TracksListTile 
        playlist={playlist}
        tracks={tracks}
      />
    </div>
  )
}

export default PlaylistShowContainer