import React, {useState, useEffect} from "react";

// export default PlaylistEditContainer = (props) => {
const PlaylistEditContainer = (props) => {
  const [searchString, setSearchString] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleSearchChange = (event) => {
    const searchString = event.currentTarget.value
    setSearchString(searchString)
    performSearch(searchString)
  }

  const performSearch = async (searchString) => {
    try {
      const response = await fetch(`/api/v1/search?query=${searchString}`)
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

  const testSomething = searchResults.map((searchResult) => {
    return (
      <div>
        <p>{searchResult.album.name}</p>
      </div>
    )
  })

  return (
    <div>
      <h1>Hi</h1>
      <input onChange={handleSearchChange} value={searchString}/>
      <h2>results</h2>
      {testSomething}
    </div>
  )
}

export default PlaylistEditContainer