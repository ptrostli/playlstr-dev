import React, { useState } from "react";

const SearchResultTile = (props) => {
  const {track, playlistId} = props
  const [shouldDisplay, setShouldDisplay] = useState(true)

  const addTrack = async () => {
    try {
      const requestBody = {
        track: {
          name: track.name,
          album: track.album.name,
          length: track.duration_ms,
          artist: track.artists[0].name,
          spotify_id: track.id
        },
      }
      const response = await fetch(`/api/v1/playlists/${playlistId}/tracks`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify (requestBody)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      setShouldDisplay(false)
      const fetchedPlaylist = await response.json()
      if (fetchedPlaylist.id) {
        console.log('Track added!')
      }
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  const time = new Date(track.duration_ms);
  
  if (shouldDisplay === false) {
    return null
  }

  return (
    <div className="search-result-tile">
      <input type="button" value="+" onClick={addTrack} />
      <p>{`${time.getMinutes()}:${time.getSeconds()}`} | {track.name} - {track.artists[0].name}</p>
      {/* add track.preview_url for samples in future */}
    </div>
  )
}

export default SearchResultTile