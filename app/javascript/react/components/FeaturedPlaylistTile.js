import React from "react";
import { Link } from "react-router-dom";

const FeaturedPlaylistTile = (props) => {
  const { featured } = props 

  return (
    <div className="featured-playlist-tile">
      <Link to={`/playlists/${props.featured.id}`}>
        <h2>{featured.title}</h2>
      </Link>
      <p>{featured.description}</p>
      <ul>
        <li>songs go here</li>
        <li>TO BE ADDED</li>
      </ul>
    </div>
  )
}

export default FeaturedPlaylistTile