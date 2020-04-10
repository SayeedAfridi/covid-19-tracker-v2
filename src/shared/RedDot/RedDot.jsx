import React from 'react'
import './RedDot.css'
import { red } from '@material-ui/core/colors'
const RedDot = () => {
  return <div style={{ background: red[600] }} className='blinking'></div>
}

export default RedDot
