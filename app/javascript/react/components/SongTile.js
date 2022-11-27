import React from "react";
// import { Link } from 'react-router-dom'

const SongTile = (props) => {
  const { song } = props

  return (
    <div className="song-tile">
      <h6>SongTile</h6>
      <p>{song.name} - {song.artist} / {song.album} || {song.length} ::: RELEASED: {song.release_date}</p>
    </div>
  )
}

export default SongTile