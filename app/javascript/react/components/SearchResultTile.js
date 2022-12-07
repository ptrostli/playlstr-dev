import React from "react";

const SearchResultTile = (props) => {
  const { track } = props

  const addTrack = (event) => {
    console.log("Woops this doesn't work yet, sorry")
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