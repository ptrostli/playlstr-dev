import React from "react";

const SearchResultTile = (props) => {
  const { song } = props

  // song.preview_url   --  30 second samples.
  return (
    <div className="search-result-tile">
        <p>{song.duration_ms} | {song.name} - {song.artists[0].name}</p>
    </div>
  )
}

export default SearchResultTile