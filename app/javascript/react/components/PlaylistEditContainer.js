import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchResultTile from "./SearchResultTile";
import TrackTile from "./TrackTile";

const PlaylistEditContainer = (props) => {
  const [searchTracks, setSearchTracks] = useState("")
  const [searchResults, setSearchResults] = useState([])

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
      console.log(results)
      setSearchResults(results.tracks)
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  const searchedTracksList = searchResults.map((searchResult) => {
    return (
      <SearchResultTile
        key={searchResult.id}
        track={searchResult}
        playlistId={playlistId}
        user={props.user}
        setUser={props.setUser}
      />
    )
  })

  // const tracksList = props.playlist.tracks.map((track) => {
  //   return (
  //     <TrackTile 
  //       key={track.id}
  //       track={track}
  //       playlistId={props.playlistId}
  //     />
  //   )
  // })

  let returnLink = `/playlists/${playlistId}`

  return (
    <div className="playlist-edit-container">
      <div className="links">
        <Link to="/playlists">All Playlists</Link>
        <Link to={returnLink}>Return</Link>
      </div>
      <div className="edit-sections">
        <h3>Add Tracks!</h3>
        <input onChange={handleSearchChange} value={searchTracks}/>
        <div className="tracks-list">
          {/* add independent search function */}
          {/* {tracksList} */}
        </div>
        <div className="search-list">
          {/* add independent search function */}
          {searchedTracksList}
        </div>
      </div>
    </div>
  )
}

export default PlaylistEditContainer