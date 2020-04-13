import React from 'react'
import { Zoom, LinearProgress, Card, CardContent } from '@material-ui/core'
import './ZoomLoader.css'

export const ZoomLoader = ({ enter, text }) => {
  return (
    <Zoom
      style={{ zIndex: 2 }}
      timeout={500}
      in={enter}
      mountOnEnter
      unmountOnExit
    >
      <div className='zoom-loader'>
        <Card className='zoom-card' elevation={4}>
          <CardContent>
            <LinearProgress color='secondary' />
            <p>{text}</p>
          </CardContent>
        </Card>
      </div>
    </Zoom>
  )
}
