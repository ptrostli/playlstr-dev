import React, { useState } from "react";

const TrackSearchBar = (props) => {
  const [searchString, setSearchString] = useState("")
  const [tracks, setTracks] = useState([])

  const handleChange = (event) => {
    const newSearchString = event.target.value
    setSearchString(newSearchString)
  }

  const handleTrackSearch = async (event) => {
    event.preventDefault()
    const body = JSON.stringify({
      search_string: searchString
    })
    try {
      const response = await fetch("/api/v1/tracks/create", {
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
      const fetchedTracks = await response.json()
      setTracks(fetchedTracks)
    } catch (err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  return(
    <div>
      
    </div>
  )
}

export default TrackSearchBar