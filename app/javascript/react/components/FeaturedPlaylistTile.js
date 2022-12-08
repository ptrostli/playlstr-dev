import React from "react";
import FeaturedPlaylistTracksTile from "./FeaturedPlaylistTracksTile";
import { Link } from "react-router-dom";

const FeaturedPlaylistTile = (props) => {
  const { featured } = props 

  const featuredTracksList = props.featured.tracks.map((track) => {
    return (
      <FeaturedPlaylistTracksTile 
        key={track.id}
        track={track}
      />
    )
  })

  return (
    <div className="featured-playlist-tile">
      <Link to={`/playlists/${featured.id}`}>
        <h2>{featured.title}</h2>
      </Link>
      <p>{featured.description}</p>
      {featuredTracksList}
    </div>
  )
}

export default FeaturedPlaylistTile