import React, {useState} from "react";

const TrackTile = (props) => {
  const { isEditable, playlist, track } = props
  const [shouldShow, setShouldShow] = useState(true)

  const handleRemoveTrack = async () => {
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
      {isEditable &&  <input type="button" value="-" onClick={handleRemoveTrack} />}
      <a href={`${track.external_url}`}><p>{`${time.getMinutes()}:${time.getSeconds()}`} | {track.name} - {track.artist}</p></a>
    </div>
  )
}

export default TrackTile