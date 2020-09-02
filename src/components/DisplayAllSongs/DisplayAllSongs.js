import React from 'react'
import SongCard from '../SongCard/SongCard'
import './DisplayAllSongs.css'

function DisplayAllSongs(props) {
  const allSongCards = props.songQueue.map(song => {
    return <SongCard
    songName={song.songName}
    artistName={song.artistName}
    link={song.link}
    />
  })
  return (
    <section className='all-songs'>
      {allSongCards}
    </section>
  )
}

export default DisplayAllSongs
//
