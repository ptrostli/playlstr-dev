import React from "react";

const SearchResultTile = (props) => {
  const { track, playlistId } = props

  const addTrack = async () => {
    try {
      const requestBody = {
        song: {
          name: track.name,
          album: track.album.name,
          length: track.duration_ms,
          artist: track.artists[0].name,
          spotify_id: track.id
        },
      }
      const response = await fetch(`/api/v1/playlists/${playlistId}/songs`, {
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
      const fetchedPlaylist = await response.json()
      if (fetchedPlaylist.id) {
        console.log('Track added!')
      }
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  return (
    <div className="search-result-tile">
      <p>{track.duration_ms} | {track.name} - {track.artists[0].name}</p>
      <input type="button" value="+" onClick={addTrack} />
      {/* add song.preview_url for samples in future */}
    </div>
  )
}

export default SearchResultTile