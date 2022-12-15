import React, { useEffect } from "react";
import getUser from "./Utilities/getUser";

const TrackTile = (props) => {
  const { track, playlistId, user, setUser } = props

  const setCurrentUser = async () => {
    const user = await getUser()
    if (user) {
      setUser(user)
    }
  }

  const showLinks = user.id

  useEffect(() => {
    setCurrentUser()
  },[])

  const removeTrack = async (props) => {
    try {
      const response = await fetch(`/api/v1/playlists/${playlistId}/tracks/${track.id}`, {
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
      } else {
          console.log('Track removed!')
      }
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  const time = new Date(track.length);

  return (
    <div className="track-tile">
      <p>{`${time.getMinutes()}:${time.getSeconds()}`} | {track.name} - {track.artist}</p>
      {showLinks && <input type="button" value="-" onClick={removeTrack} />}
    </div>
  )
}

export default TrackTile