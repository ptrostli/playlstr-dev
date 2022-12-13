import React from "react";

const TrackTile = (props) => {
  const { track, playlistId } = props

  const removeTrack = async (props) => {
    console.log("This also doesn't do anything... Yet.")
    try {
      const response = await fetch(`/api/v1/playlist/${playlistId}/tracks/${track.id}`, {
        method: "DELETE",
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: null
      })
      if (!response.ok) {
        const errorMessage = `${response.status} - (${response.statusText})`
        const error = new Error(`${errorMessage}`)
        throw(error)
      }
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  const time = new Date(track.length);

  return (
    <div className="track-tile">
      <p>{`${time.getMinutes()}:${time.getSeconds()}`} | {track.name} - {track.artist}</p>
      {/* <input type="button" value="-" onClick={removeTrack} /> */}
    </div>
  )
}

export default TrackTile