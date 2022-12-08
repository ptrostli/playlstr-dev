import React from "react";

const TrackTile = (props) => {
  const { track } = props

  return (
    <div className="track-tile">
      <h6>{track.name} - {track.artist} || {track.length}</h6>
    </div>
  )
}

export default TrackTile