import React from "react";
import TrackTile from "./TrackTile";

const TracksListTile = (props) => {
  const { isEditable, playlistId, tracks, playlist, user, setUser } = props

  const tracksList = tracks.map((track) => {
    return (
      <TrackTile 
        key={track.id}
        track={track}
        playlist={playlist}
        user={user}
        setUser={setUser}
        playlistId={playlistId}
        isEditable={isEditable}
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