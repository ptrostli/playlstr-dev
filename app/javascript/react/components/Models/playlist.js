export default class Playlist {
  constructor(id) {
    this.id = id
    this.tracks = []
    this.created_at = null
    this.updated_at = null
    this.user = null
    this.title = ""
    this.description = ""
    this.user_id = ""
  }

  static getPlaylists = async() => {
    try {
      const response = await fetch("api/v1/playlists")
      if (!response.ok) {
        const errorMessage = `${response.status} -- (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const fetchedPlaylists = await response.json()
      return fetchedPlaylists
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }
  
  setAttributes = (playlist) => {
    this.tracks = playlist.tracks
    this.created_at = playlist.created_at
    this.updated_at = playlist.updated_at
    this.description = playlist.description
    this.title = playlist.title
    this.user = playlist.user
    this.user_id = playlist.user_id
  }
  
  getPlaylist = async() => {
    const playlistId = this.id
    try {
      const response = await fetch(`/api/v1/playlists/${playlistId}`)
      if (!response.ok) {
        const errorMessage = `${response.status}  (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      } 
      const fetchedPlaylist = await response.json()
      this.setAttributes(fetchedPlaylist)
      return fetchedPlaylist
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
    }
  }

  deletePlaylist = async() => {
    const playlistId = this.id
    try {
      const response = await fetch(`/api/v1/playlists/${playlistId}`, {
        credentials: "same-origin",
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: null
      })
      if (!response.ok) {
        const errorMessage = `${response.status} - (${response.statusText})`
        const error = new Error(`${errorMessage}`)
        throw(error)
      }
      return true
    } catch(err) {
      console.error(`ERROR: ${err.message}`)
      return false
    }
  }

  removeTrack = async (trackId) => {
    const playlistId = this.id
    try {
      const response = await fetch(`/api/v1/playlists/${playlistId}/tracks/${trackId}`, {
        method: "DELETE",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      console.log("Track removed!")
      return true
    } catch(err) { 
      console.error(`ERROR: ${err.message}`)
      return false
    }
  }
}