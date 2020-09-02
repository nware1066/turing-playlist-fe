import React from 'react'
import App from '../App/App'
import './SongCard.css'

function SongCard(props) {
  return (
    <article className='songCard'>
      <p>songName: {props.songName}</p>
      <p>artistName: {props.artistName}</p>
      <p>link: {props.link}</p>
    </article>
  )
}
//
export default SongCard
