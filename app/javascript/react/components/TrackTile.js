import React from "react";

const TrackTile = (props) => {
  const {track} = props

  const time = new Date(track.length);
  
  return (
    <div className="track-tile">
      <p>{`${time.getMinutes()}:${time.getSeconds()}`} | {track.name} - {track.artist}</p>
    </div>
  )
}

export default TrackTile