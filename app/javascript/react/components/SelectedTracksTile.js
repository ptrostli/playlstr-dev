import React from "react";

const SelectedTracksTile = (props) => {
  const removeTrack = (event) => {
    console.log("This also doesn't do anything...")
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