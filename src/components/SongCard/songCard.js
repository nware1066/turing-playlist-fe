import React from 'react'
import App from '../App/App'

function songCard(props) {
  return (
    <article className='songCard'>
    <p>songName: {props.songName}</p>
    <p>artistName: {props.artistName}</p>
    <p>link: {props.link}</p>
    </article>
  )
}
//
export default songCard
