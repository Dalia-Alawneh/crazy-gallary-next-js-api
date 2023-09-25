"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [albums ,setAlbums] = useState([])
  async function getAlbums(){
    let {data} = await axios.get('https://jsonplaceholder.typicode.com/albums')
    setAlbums(data)
  }
  useEffect(()=>{
      getAlbums()
  })
  return (
    <div>
      <div className="container">
        <h1>Our Albums</h1>

        <div className="row">
          {
            albums.map((album, index)=>{
              return <div className="col-md-3" key={index}>
                <div className="card p-2">
                  <h2>{album.title}</h2>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default page
