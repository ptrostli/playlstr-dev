import React from "react";
import { Link } from "react-router-dom";

const FeaturedPlaylistTile = (props) => {
  const { featured } = props 

  const featuredSongsList = props.featured.songs.map((song) => {
    return (
      <ul className="featured-songs-list">
        <li>{song.length} || {song.name} - {song.artist}</li>
      </ul>
    )
  })

  return (
    <div className="featured-playlist-tile">
      <Link to={`/playlists/${featured.id}`}>
        <h2>{featured.title}</h2>
      </Link>
      <p>{featured.description}</p>
      {featuredSongsList}
    </div>
  )
}

export default FeaturedPlaylistTile