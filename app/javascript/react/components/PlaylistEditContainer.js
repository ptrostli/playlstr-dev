import React, {useState, useEffect} from "react";

// export default PlaylistEditContainer = (props) => {
const PlaylistEditContainer = (props) => {
  const [searchString, setSearchString] = useState("")

  const handleSearchChange = (event) => {
    const searchString = event.currentTarget.value
    setSearchString(searchString)
    performSearch(searchString)
  }

  const performSearch = async (searchString) => {
    try {
      const response = await fetch(`/api/v1/search`)
      if (!response.ok) {
        const errorMessage = `${response.status}  (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } 
      const fetchedPlaylist = await response.json()
      setPlaylist(fetchedPlaylist) // fetchedPlaylist.playlist ??
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  return (
    <div>
      <h1>Hi</h1>
      <input onChange={handleSearchChange} value={searchString}/>
    </div>
  )
}

export default PlaylistEditContainer