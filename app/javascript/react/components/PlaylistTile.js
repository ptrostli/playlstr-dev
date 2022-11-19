import React from "react";
import { Link } from "react-router-dom";

const PlaylistTile = (props) => {
  return (
    <div className="playlist-tile">
      <Link to={`/playlists/${playlist.id}`}>
        <h4>{props.playlist.title}</h4>
      </Link>
        <p>{props.playlist.description}</p>
    </div>
  )
}

export default PlaylistTile