import React from "react";
import SongTile from "./SongTile";

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
      <h5>SongsIndexContainer</h5>
      {songsList}
    </div>
  )
}

export default SongsIndexContainer