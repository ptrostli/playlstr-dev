import React from "react";
import SongTile from "./SongTile";

const SongsIndexTile = (props) => {
  
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
    </div>
  )
}

export default SongsIndexTile