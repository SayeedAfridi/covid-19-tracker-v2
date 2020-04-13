import React from 'react'
import { Zoom, LinearProgress, Card, CardContent } from '@material-ui/core'
import './ZoomLoader.css'

export const ZoomLoader = ({ enter, text, fullPage }) => {
  return (
    <Zoom
      style={{ zIndex: 2 }}
      timeout={{
        appear: 300,
        enter: 300,
        exit: 500,
      }}
      in={enter}
      mountOnEnter
      unmountOnExit
    >
      <div className={fullPage ? 'zoom-loader-fullpage' : 'zoom-loader'}>
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
