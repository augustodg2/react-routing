import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Album = ({ match }) => {
  const [album, setAlbum] = useState([])
  useEffect(() => { fetchAlbum() }, [])

  const fetchAlbum = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/albums/${match.params.id}`)
    const album = await data.json()
    setAlbum(album)
  }

  return (
    <div>
      <h1>{album.title}</h1>
    </div>
  )
}

export default Album
