import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {
  const [albums, setAlbums] = useState([])
  useEffect(() => { fetchAlbums() }, [])

  const fetchAlbums = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/albums')
    const albums = await data.json()
    setAlbums(albums)
    console.log(albums)
  }

  return (
    <div>
      <h1>Shop Page</h1>
      <div>
        { albums.map(album => (
          <Link to={`/shop/${album.id}`} key={album.id}>
            <h4>{album.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Shop
