import React from "react";

const SelectedTracksTile = (props) => {

  // const playlistId = props.match.params.playlistId

  // const removeTrack = async (props) => {
  const removeTrack = (event) => {
    console.log("This also doesn't do anything...")
    // try {
    //   const response = await fetch(`/api/v1/playlists/${playlistId}`, {
    //     credentials: "same-origin",
    //     method: "DELETE",
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json',
    //     },
    //     body: null
    //   })
    //   if (!response.ok) {
    //     const errorMessage = `${response.status} - (${response.statusText})`
    //     const error = new Error(`${errorMessage}`)
    //     throw(error)
    //   }
    //   setRedirect(true)
    // } catch(err) {
    //   console.error(`ERROR: ${err.message}`)
    // }
  }

  return (
    <div>
      <p>test</p>
      <input type="button" value="-" onClick={removeTrack} />
      {/* add song.preview_url for samples in future */}
    </div>
  )
}

export default SelectedTracksTile