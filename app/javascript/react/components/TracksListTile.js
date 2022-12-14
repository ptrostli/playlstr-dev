import React from "react";
import TrackTile from "./TrackTile";

const TracksListTile = (props) => {
  const { user, setUser } = props

  const tracksList = props.playlist.tracks.map((track) => {
    return (
      <TrackTile 
        key={track.id}
        track={track}
        user={user}
        setUser={setUser}
        playlistId={props.playlistId}
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