import React from "react";

const SearchResultTile = (props) => {
  const { track } = props

  // const playlistId = props.match.params.playlistId

  // const addTrack = async (event) => {
  const addTrack =  (event) => {
    console.log(`I don't do shit yet, D:`)
    // event.preventDefault()
    // try {
    //   const response = await fetch(`/api/v1/playlists/${playlistId}`, {
    //     method: "POST",
    //     credentials: "same-origin",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     },
    //     body: JSON.stringify({ playlist: newPlaylist })
    //   })
    //   if (!response.ok) {
    //     const errorMessage = `${response.status} (${response.statusText})`
    //     const error = new Error(errorMessage)
    //     throw(error)
    //   }
    //   const fetchedPlaylist = await response.json()
    //   if (fetchedPlaylist.id) {
    //     console.log('Song created!')
    //   }
    // } catch(err) {
    //   console.error(`ERROR: ${err.message}`)
    // }
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