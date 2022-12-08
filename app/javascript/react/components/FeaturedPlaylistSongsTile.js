import React from "react";

const FeaturedPlaylistSongsTile = (props) => {
  const { song } = props

  return (
    <ul>
      <li>{song.length} || {song.name} - {song.artist}</li>
    </ul>
  )
}

export default FeaturedPlaylistSongsTile