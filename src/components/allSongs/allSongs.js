import React from 'react'
import songCard from '../songCard/songCard'

function displaySongs(props) {
  const allSongCards = props.songQueue.map(song => {
    return <songCard
    songName: {song.songName}
    artistName: {song.artistName}
    link: {song.link}
    />
  })
}

export default allSongs 
//
