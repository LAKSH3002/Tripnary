import React from 'react'
import "./Destinationstyles.css";

export default function Destinationdata(props) {
  return (
    <div className='d-card'>
      <div className='d-image'>
        <img src = {props.image} alt='image'></img>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  )
}
