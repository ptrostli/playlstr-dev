import React, { useState, useEffect } from "react";
import FeaturedPlaylistTile from "./FeaturedPlaylistTile";
import LoginButtonsTile from "./LoginButtonsTile";
import { Link } from "react-router-dom";
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
      <h1>HomePage</h1>
      <LoginButtonsTile />
      <Link to="/playlists">All Playlists!</Link>
      {/* <h2>F E A T U R E D</h2> */}
      <FeaturedPlaylistTile 
        featured={featuredPlaylist}
      />
    </div>
  )
}

export default HomePage