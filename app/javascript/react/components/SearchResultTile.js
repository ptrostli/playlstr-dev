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
          spotify_id: track.id,
          external_url: track.external_urls.spotify,
          preview_url: track.preview_url,
          artist_url: track.artists[0].external_urls.spotify,
          image: track.album.images[2].url
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
        return true
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
      <input type="button" value="+" onClick={addTrack}/>
      <a href={`${track.external_urls.spotify}`}><p>{`${time.getMinutes()}:${time.getSeconds()}`} | {track.name} - {track.artists[0].name}</p></a>
    </div>
  )
}

export default SearchResultTile