import React from 'react'
import './loader.css'
const Loader = ({ text }) => {
  return (
    <div className='loader-container'>
      <div className='lds-ellipsis'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default Loader
