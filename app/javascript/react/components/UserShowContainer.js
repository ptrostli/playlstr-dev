import React, { useState, useEffect } from "react";
import getUser from "./Utilities/getUser";

const UserShowContainer = (props) => {
  const [user, setUser] = useState({})

  const setCurrentUser = async () => {
    const user = await getUser()
    if (user) {
      setUser(user)
    }
  }

  useEffect(() => {
    setCurrentUser()
  }, [])

  let joinDate
  if (user.created_at) {
    const date = new Date(user.created_at)
    joinDate = date.toLocaleDateTimeString()
  }

  return (
    <div className="user-show-container">
      <h2>{user.username}</h2>
      <h4>Joined {joinDate}</h4>
    </div>
  )
}

export default UserShowContainer