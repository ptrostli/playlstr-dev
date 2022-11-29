import React from "react";
import SongTile from "./SongTile";
// import SearchBar from "./SearchBar";

const SongsIndexContainer = (props) => {
  const songsList = props.playlist.songs.map((song) => {
    return (
      <SongTile 
        key={song.id}
        song={song}
      />
    )
  })

  return(
    <div className="songs-container">
      {songsList}
      {/* <SearchBar
        
      /> */}
    </div>
  )
}

export default SongsIndexContainer