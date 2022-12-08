import React from "react";

const FeaturedPlaylistTracksTile = (props) => {
  const { track } = props

  return (
    <ul>
      <li>{track.length} || {track.name} - {track.artist}</li>
    </ul>
  )
}

export default FeaturedPlaylistTracksTile