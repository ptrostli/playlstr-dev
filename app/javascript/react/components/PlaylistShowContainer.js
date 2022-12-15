import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';
import getUser from "./Utilities/getUser";
import TracksListTile from "./TracksListTile";
import PlaylistEditContainer from "./PlaylistEditContainer";
import EditTracksTile from "./TrackTile";

const PlaylistShowContainer = (props) => {
  const [redirect, setRedirect] = useState(false)
  const [user, setUser] = useState({})
  const [tracks, setTracks] = useState([])
  const [playlist, setPlaylist] = useState({
    tracks: [tracks]
  })
  
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
      setTracks(...tracks, fetchedPlaylist.tracks)
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

  // GET THIS SHIT TO WORK YO
  const handlePlaylistChange = (event) => {
    setTracks({
      ...tracks, [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const setCurrentUser = async () => {
    const user = await getUser()
    if (user) {
      setUser(user)
    }
  }

  const showLinks = user.id === playlist.user_id

  useEffect(() => {
    getPlaylist() 
    setCurrentUser()
  },[])

  let createdAt
  let updatedAt
  if (playlist.created_at) {
    const created = new Date(playlist.created_at)
    createdAt = `${created.toLocaleString()}`
  }
  if (playlist.updated_at) {
    const updated = new Date(playlist.updated_at)
    updatedAt = `${updated.toLocaleString()}`
  }

  if (redirect === true) {
    return <Redirect to ="/playlists"/>
  }

  const currentList = tracks.map((track) => {
    return (
      <EditTracksTile 
        key={track.id}
        track={track}
      />
    )
  })

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
        <p>Submitted by: <strong>{playlist?.user?.username}</strong></p>
        {showLinks && <div className="edit-or-delete">
          <input type="button" value="Delete Playlist" onClick={deletePlaylist} />
          <Link to={`/playlists/${playlistId}/edit`}><input type="button" value="Edit Playlist"/></Link>
        </div>}
      </div>
      {/* <PlaylistEditContainer 
        playlist={playlist}
        playlistId={playlistId}
        setPlaylist={setPlaylist}
        getPlaylist={getPlaylist}
      /> */}
      {currentList}
      <TracksListTile 
        playlist={playlist}
        playlistId={playlistId}
        tracks={playlist.tracks}
        user={user}
        setUser={setUser}
      />
    </div>
  )
}

export default PlaylistShowContainer