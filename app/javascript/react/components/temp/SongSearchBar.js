import React, { useState } from "react";

const SongSearchBar = (props) => {
  const [searchString, setSearchString] = useState("")
  const [songs, setSongs] = useState([])

  const handleChange = (event) => {
    const newSearchString = event.target.value
    setSearchString(newSearchString)
  }

  const handleSongSearch = async (event) => {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: searchString
    })
    try {
      const response = await fetch("/api/v1/songs/create", {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const fetchedSongs = await response.json()
      setSongs(fetchedSongs)
    } catch (err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  return(
    <div>
      
    </div>
  )
}

export default SongSearchBar