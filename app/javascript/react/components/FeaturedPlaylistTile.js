import React from "react";
import { Link } from "react-router-dom";

const FeaturedPlaylistTile = (props) => {


  return (
    <div className="featured-playlist-tile">
      <Link to={`/playlists/${props.featured.id}`}>
        <h2>{props.featured.title}</h2>
      </Link>
      <p>{props.featured.description}</p>
    </div>
  )
}

export default FeaturedPlaylistTile