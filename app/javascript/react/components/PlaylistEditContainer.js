import React, {useState} from "react";
import SearchResultTile from "./SearchResultTile";

// export default PlaylistEditContainer = (props) => {
const PlaylistEditContainer = (props) => {
  const [searchTracks, setSearchTracks] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleSearchChange = (event) => {
    const searchTracks = event.currentTarget.value
    setSearchTracks(searchTracks)
    performSearch(searchTracks)
  }

  const performSearch = async (searchTracks) => {
    try {
      const response = await fetch(`/api/v1/search?query=${searchTracks}`)
      if (!response.ok) {
        const errorMessage = `${response.status}  (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } 
      const results = await response.json()
      // setPlaylist(results)
      console.log(results)
      setSearchResults(results.tracks)
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  const tracksList = searchResults.map((searchResult) => {
    return (
      <div>
        <SearchResultTile
          key={searchResult.id}
          song={searchResult}
        />
      </div>
    )
  })

  return (
    <div>
      <h2>Results</h2>
      <input onChange={handleSearchChange} value={searchTracks}/>
      {tracksList}
    </div>
  )
}

export default PlaylistEditContainer