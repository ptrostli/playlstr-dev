import React, { useState } from "react";
import { Redirect } from 'react-router-dom'
import ErrorList from "./ErrorList";

const NewPlaylistFormContainer = (props) => {
  const [errors, setErrors] = useState({})
  const [redirect, setRedirect] = useState(false)
  const [newPlaylist, setNewPlaylist] = useState({
    title: '',
    description: ''
  })

  // const validSubmission = () => {
  //   let errorList = {}
  //   const requiredFields = 'title' // create array if mandatory fields added
  //   requiredFields.forEach(field => {
  //     if (newPlaylist[field].trim() === "") {
  //       errorList = {
  //         ...errorList,
  //         [field]: "is required."
  //       }
  //     }
  //   })
  //   setErrors(errorList)
  // }
  
  const handleChange = (event) => {
    setNewPlaylist({
      ...newPlaylist,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const createNewPlaylist = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch('/api/v1/playlists', {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ playlist: newPlaylist })
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedPlaylist = await response.json()
      if (fetchedPlaylist.id) {
        console.log('Playlist created!')
        setRedirect(true)
      }
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  if (redirect === true) {
    return <Redirect to ="/playlists"/>
  }


  return (
    <form className="new-playlist-form" onSubmit={createNewPlaylist}>
      <label>
        <h6>Title:</h6>
        <input name="title" id="title" type="text" onChange={handleChange} value={newPlaylist.title}/>
      </label>

      <label>
        <h6>Description:</h6>
        <input name="description" id="description" type="text" value={newPlaylist.description} onChange={handleChange}/>
      </label>

      <input type="submit" value="Create New Playlist"/>
    </form>
  )
}

export default NewPlaylistFormContainer