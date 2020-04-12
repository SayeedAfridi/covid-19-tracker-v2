import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  useTheme,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
} from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import './newsCard.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 500,
    margin: theme.spacing(2),
    paddingBottom: 1,
    position: 'relative',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}))

const NewsCard = ({ title, image, description, date, newsLink }) => {
  const classes = useStyles()
  const theme = useTheme()
  if (!title) {
    return null
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        style={{ background: theme.palette.primary.main }}
        title={title}
        subheader={`at ${new Date(date).toDateString()}`}
      />
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography
          variant='body2'
          color='textSecondary'
          component='div'
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </CardContent>
      <div className='buttonLink'>
        <a href={newsLink} target='blank'>
          <Button>
            Read More
            <ArrowRightAltIcon />
          </Button>
        </a>
      </div>
    </Card>
  )
}

export default NewsCard
