import React from 'react'

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
