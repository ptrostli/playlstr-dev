import React from "react";
import { Link } from "react-router-dom";

const PlaylistTile = (props) => {
  const {playlist} = props

  return (
    <div className="playlist-tile">
      <Link to={`/playlists/${playlist.id}`}>
        <h4>PlaylistTile</h4>
        {/* <h4>{playlist.title}</h4> */}
      </Link>
        <p>{playlist.description}</p>
    </div>
  )
}

export default PlaylistTile