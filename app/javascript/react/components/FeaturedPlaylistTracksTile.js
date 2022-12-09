import React from "react";

const FeaturedPlaylistTracksTile = (props) => {
  const { track } = props

  const time = new Date(track.length);

  return (
    <ul>
      <li>{`${time.getMinutes()}:${time.getSeconds()}`} || {track.name} - {track.artist}</li>
    </ul>
  )
}

export default FeaturedPlaylistTracksTile