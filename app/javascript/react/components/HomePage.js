import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeaturedPlaylistTile from "./FeaturedPlaylistTile";

const HomePage = (props) => {
  const [featuredPlaylist, setFeaturedPlaylist] = useState({
    tracks: []
  })
  
  const getFeaturedPlaylist = async() => {
    try {
      const response = await fetch("api/v1/playlists")
      if (!response.ok) {
        const errorMessage = `${response.status} -- (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedPlaylists = await response.json()
      setFeaturedPlaylist(fetchedPlaylists[Math.floor(Math.random() * fetchedPlaylists.length)])
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  useEffect(() => {
    getFeaturedPlaylist()
  },[])

  return (
    <div className="home-page">
      <h5 className="links"><Link to="/playlists">See All Playlists</Link></h5>
      <h2 className="header">F E A T U R E D</h2>
      <FeaturedPlaylistTile 
        featured={featuredPlaylist}
      />
    </div>
  )
}

export default HomePage