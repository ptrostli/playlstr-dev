import React from "react";

const FeaturedPlaylistTracksTile = (props) => {
  const { track } = props

  const time = new Date(track.length);

  return (
    <ul className="featured-tracks-tile">
      <a href={`${track.external_url}`}><li>{`${time.getMinutes()}:${time.getSeconds()}`} | {track.name} - {track.artist}</li></a>
    </ul>
  )
}

export default FeaturedPlaylistTracksTile