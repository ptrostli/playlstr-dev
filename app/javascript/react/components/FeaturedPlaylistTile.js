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
      <div className="featured-playlist-info">
        <Link to={`/playlists/${featured.id}`}>
          <h3>{featured.title}</h3>
        </Link>
        <p>{featured.description}</p>
      </div>
      {featuredTracksList}
    </div>
  )
}

export default FeaturedPlaylistTile