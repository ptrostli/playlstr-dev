import React, { useEffect } from "react";
import getUser from "./Utilities/getUser";

const EditTrackTile = (props) => {
  const { track, setUser } = props

  const setCurrentUser = async () => {
    const user = await getUser()
    if (user) {
      setUser(user)
    }
  }

  useEffect(() => {
    setCurrentUser()
  },[])

  const time = new Date(track.length);

  return (
    <div className="track-tile">
      <p>{`${time.getMinutes()}:${time.getSeconds()}`} | {track.name} - {track.artist}</p>
    </div>
  )
}

export default EditTrackTile