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
      <h5 className="links"><Link to="/playlists">All Playlists</Link></h5>
      <div className="site-information">
        <h5 className="slogan">Bringing back the days of sharing mix tapes!</h5>
        <h5>Create playlists to share with the world.</h5>
      </div>
      <h2 className="header">F E A T U R E D</h2>
      <FeaturedPlaylistTile 
        featured={featuredPlaylist}
      />
    </div>
  )
}

export default HomePage