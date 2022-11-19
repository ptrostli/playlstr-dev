import React, { useState, useEffect } from "react";

const UserShowContainer = (props) => {
  const [user, setUser] = useState({})

  const getUser = async () => {
    try {
      const userId = props.match.params.userId
      const response = await fetch(`/api/v1/users/${userId}`)
      debugger
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedUser = await response.json()
      setUser(fetchedUser)
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  // let joinDate
  // if (user.created_at) {
  //   const date = new Date(user.created_at)
  //   joinDate = date.toLocaleDateString()
  // }

  return (
    <div>
      <h2>{user.username}</h2>
      {/* <h4>Joined {joinDate}</h4> */}
      <h4>Location: {user.zip}</h4>
    </div>
  )
}

export default UserShowContainer