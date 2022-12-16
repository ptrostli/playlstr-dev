import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';
import getUser from "./Utilities/getUser";
import Playlist from "./Models/playlist";
import TracksListTile from "./TracksListTile";

const PlaylistShowContainer = (props) => {
  const playlistId = props.match.params.playlistId
  const initializedPlaylist = new Playlist(playlistId)
  const [redirect, setRedirect] = useState(false)
  const [user, setUser] = useState({})
  const [playlist, setPlaylist] = useState(initializedPlaylist)

  const handleGetPlaylist = async() => {
    const fetchedPlaylist = await playlist.getPlaylist()
    setPlaylist(fetchedPlaylist)
  }

  const handleDeletePlaylist = async() => {
    const didDelete = playlist.deletePlaylist()
    if (didDelete) {
      setRedirect(true)
    }
  }

  const setCurrentUser = async () => {
    const user = await getUser()
    if (user) {
      setUser(user)
    }
  }

  const showLinks = user.id === playlist.user_id

  useEffect(() => {
    handleGetPlaylist() 
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
          <input type="button" value="Delete Playlist" onClick={handleDeletePlaylist} />
          <Link to={`/playlists/${playlistId}/edit`}><input type="button" value="Edit Playlist"/></Link>
        </div>}
      </div>
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