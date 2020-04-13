import React, { useEffect, useState } from 'react'
import { newsApiKey } from '../../config'
import { dateOfPreviousMonth } from './utils'
import { Grid, useTheme } from '@material-ui/core'
import axios from 'axios'
import NewsCard from './NewsCard'
import { Pagination } from '@material-ui/lab'
import { ZoomLoader } from '../../shared/ZoomLoader/ZoomLoader'

const url = `https://newsapi.org/v2/top-headlines?q=corona&from=${dateOfPreviousMonth()}&sortBy=publishedAt&apiKey=${newsApiKey}&language=en&pageSize=18`

const News = () => {
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState(null)
  const [page, setPage] = useState(1)
  const {
    palette: { type },
  } = useTheme()

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      const res = await axios.get(`${url}&page=${page}`)
      setNews(res.data.articles)
      window.scrollTo(0, 0)
      setLoading(false)
    }
    fetchNews()
  }, [page])

  const handlePage = (e, val) => {
    setPage(val)
  }

  return (
    <Grid
      container
      spacing={2}
      style={{
        background: type === 'light' ? '#fff' : '#3a3a4f',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ZoomLoader enter={loading} fullPage={true} text='Fetching News' />
      {news &&
        news.map((n, i) => (
          <NewsCard
            key={i}
            title={n.title}
            image={n.urlToImage}
            description={n.description}
            author={n.author}
            newsLink={n.url}
            date={n.publishedAt}
            source={n.source.name}
          />
        ))}
      <Grid
        item
        xs={12}
        lg={12}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {news && <Pagination color='primary' count={5} onChange={handlePage} />}
      </Grid>
    </Grid>
  )
}

export default News
