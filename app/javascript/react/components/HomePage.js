import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FeaturedPlaylistTile from "./FeaturedPlaylistTile";
// import LoginButtonsTile from "./LoginButtonsTile";
// FUTURE PLAN: Create a component that will allow user to sign up and sign in on the home page, without link to.

const HomePage = (props) => {
  const [featuredPlaylist, setFeaturedPlaylist] = useState({})
  
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
      <h2>F E A T U R E D</h2>
      <FeaturedPlaylistTile 
        featured={featuredPlaylist}
      />
      <h5><Link to="/playlists">See All Playlists</Link></h5>
    </div>
  )
}

export default HomePage