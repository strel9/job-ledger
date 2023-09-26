import React from 'react'
import { useRouter } from 'next/router'

import { API_URL } from 'constants/api'
import { ARTICLES_GET, JOBS_GET } from 'constants/links'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Jobs from './Jobs'
import Content from './Content'

import useClasses from 'hooks/useClasses'
import styles from './styles'
import ArticlesBlock from './Articles'

export default function ArticleDetails (props) {
  const classes = useClasses(styles)

  const router = useRouter()
  const { id: pathID } = router.query

  const [articles, setArticles] = React.useState()
  const [jobs, setJobs] = React.useState()

  React.useEffect(() => {
    fetch(`${API_URL}${ARTICLES_GET}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setArticles(arr)
      })
  }, [])

  React.useEffect(() => {
    fetch(`${API_URL}${JOBS_GET}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setJobs(arr)
      })
  }, [])

  const itemCard = articles?.find(item => parseInt(item.id) === parseInt(pathID))

  return (
    <Box
      className={classes.root}
      component='div'
      sx={{
        pt: 14.8,
        pb: 10,
        bgcolor: 'primary.bg'
      }}
    >
      <Container>
        <Box sx={{
          display: 'flex'
        }}
        >
          <Content {...itemCard} />

          <Jobs data={jobs} />
        </Box>

        <ArticlesBlock articles={articles} />
      </Container>
    </Box>
  )
}
