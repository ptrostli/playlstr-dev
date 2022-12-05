import React from "react";
import { Link } from "react-router-dom";

const PlaylistTile = (props) => {
  const { playlist } = props

  return (
    <div className="playlist-tile">
      <Link to={`/playlists/${playlist.id}`}>
        <h4>{playlist.title}</h4>
        <p>{playlist.description}</p>
      </Link>
    </div>
  )
}

export default PlaylistTile