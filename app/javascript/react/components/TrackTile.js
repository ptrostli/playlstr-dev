import React, {useState} from "react";

const TrackTile = (props) => {
  const { isEditable, playlist, track } = props
  const [shouldShow, setShouldShow] = useState(true)

  const handleRemoveTrack = async () => {
    console.log(playlist)
    console.log(typeof playlist)
    const didRemove = await playlist.removeTrack(track.id)
    if (didRemove) {
      setShouldShow(false)
    }
  }

  const time = new Date(track.length);

  if (!shouldShow) {
    return null
  }

  return (
    <div className="track-tile">
      {<p>{`${time.getMinutes()}:${time.getSeconds()}`} | {track.name} - {track.artist}</p>}
      {isEditable &&  <input type="button" value="-" onClick={handleRemoveTrack} />}
    </div>
  )
}

export default TrackTile