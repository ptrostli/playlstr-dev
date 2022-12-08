import React, {useState} from "react";
import SearchResultTile from "./SearchResultTile";
import SelectedTracksTile from "./SelectedTracksTile";

// export default PlaylistEditContainer = (props) => {
const PlaylistEditContainer = (props) => {
  const [searchTracks, setSearchTracks] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [selectedTracks, setSelectedTracks] = useState([])

  const playlistId = props.match.params.playlistId

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
          playlistId={playlistId}
          />
          )
        })
        
        const selectedTracksList = selectedTracks.map((selectedTrack) => {
    return (
      <SelectedTracksTile 
        key={selectedTrack.id}
        track={selectedTrack}
        playlistId={playlistId}
      />
    )
  })

  return (
    <div className="playlist-edit-container">
      <h3>Add Songs!</h3>
        <input onChange={handleSearchChange} value={searchTracks}/>
      <div className="edit-sections">
        <div className="search-list">
          {tracksList}
        </div>
        <div className="selected-list">
          {selectedTracksList}
        </div>
      </div>
    </div>
  )
}

export default PlaylistEditContainer