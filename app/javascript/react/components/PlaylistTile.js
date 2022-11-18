import React from "react";
import { Link } from "react-router-dom";

// TO COMPLETE --> Display associated username.
const PlaylistTile = (props) => {
  // debugger
  return (
    <div className="playlist-tile">
      {/* <Link to={`/playlists/${playlist.id}`}> */}
        <h4>{props.playlist.title}</h4>
        <p>{props.playlist.description}</p>
        
      {/* </Link> */}
    </div>
  )
}

export default PlaylistTile