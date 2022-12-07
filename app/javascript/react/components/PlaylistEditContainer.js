import React, {useState} from "react";
import SearchResultTile from "./SearchResultTile";
import SelectedTracksTile from "./SelectedTracksTile";

// export default PlaylistEditContainer = (props) => {
const PlaylistEditContainer = (props) => {
  const [searchTracks, setSearchTracks] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [selectedTracks, setSelectedTracks] = useState([])

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
        <SearchResultTile
          key={searchResult.id}
          track={searchResult}
        />
    )
  })

  const selectedTracksList = selectedTracks.map((selectedTrack) => {
    return (
      <SelectedTracksTile 
        key={selectedTrack.id}
        track={selectedTrack}
      />
    )
  })

  return (
    <div className="playlist-edit-container">
      <h3>Add Songs!</h3>
      <input onChange={handleSearchChange} value={searchTracks}/>
      {tracksList}
      {selectedTracksList}
    </div>
  )
}

export default PlaylistEditContainer