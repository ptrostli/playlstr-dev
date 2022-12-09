import React from "react";
import TrackTile from "./TrackTile";

const TracksListTile = (props) => {
  
  const tracksList = props.playlist.tracks.map((track) => {
    return (
      <TrackTile 
        key={track.id}
        track={track}
      />
    )
  })

  return(
    <div className="tracks-container">
      {tracksList}
    </div>
  )
}

export default TracksListTile