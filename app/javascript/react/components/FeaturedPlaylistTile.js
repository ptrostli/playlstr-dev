import React from "react";
import { Link } from "react-router-dom";

const FeaturedPlaylistTile = (props) => {

  return (
    <div className="featured-playlist-tile">
      <h3>FeaturedPlaylistTile</h3>
      <Link to={`/playlists/${props.featured.id}`}>
        <h4>PLAYLIST: {props.featured.title}</h4>
      </Link>
    </div>
  )
}

export default FeaturedPlaylistTile