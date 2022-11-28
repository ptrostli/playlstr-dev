import React, { useState, useEffect } from "react";
import axios from 'axios'

const SpotifySearchTile = (props) => {
  const CLIENT_ID = "a9b02aefeb5f4fba8796911337e2713b"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])
  const [songs, setSongs] = useState([])
  const [albums, setAlbums] = useState([])

  const searchArtists = async(event) => {
    event.preventDefault()
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        query: searchKey,
        type: "artist"
      }
    })
    setArtists(data.artists.items)
  }

  useEffect(() => {
    const hash = window.location.hash
    let token =  window.localStorage.getItem("token")

    if(!token && hash) {
      token = hash.substring(1).split("&").find(element => element.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    setToken(token)
  },[])

  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  const renderArtists = () => {
    return artists.map(artist => (
      <div key={artist.id}>
        {artist.name}
      </div>
    ))
  }

  return (
    <div>
      {!token ?
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        : <button onClick={logout}>Logout</button>
      }

      {token ?
        <form onSubmit={searchArtists}>
          <input type="text" onChange={event => setSearchKey(event.target.value)}/>
          <button type={"submit"}>Search</button>
        </form>
        :<p>Please login</p>
      }

      {renderArtists()}
    </div>
  )
}

export default SpotifySearchTile