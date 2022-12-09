import React from "react";

const TrackTile = (props) => {
  const { track } = props

  const time = new Date(track.length);

  return (
    <div className="track-tile">
      <h6>{`${time.getMinutes()}:${time.getSeconds()}`} || {track.name} - {track.artist}</h6>
    </div>
  )
}

export default TrackTile