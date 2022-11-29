import React from "react";
// import { Link } from 'react-router-dom'

const SongTile = (props) => {
  const { song } = props

  return (
    <div className="song-tile">
      <h6>{song.name} - {song.artist} || {song.length}</h6>
    </div>
  )
}

export default SongTile