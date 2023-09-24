import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { API_URL } from 'constants/api'
import { ARTICLES, JOBS } from 'constants/links'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Jobs from './Jobs'
import Content from './Content'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function ArticleDetails (props) {
  const classes = useClasses(styles)

  const router = useRouter()
  const { id: pathID } = router.query

  const [articles, setArticles] = React.useState()
  const [jobs, setJobs] = React.useState()

  React.useEffect(() => {
    fetch(`${API_URL}${ARTICLES}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setArticles(arr)
      })
  }, [])

  React.useEffect(() => {
    fetch(`${API_URL}${JOBS}`)
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
        bgcolor: 'primary.bg'
      }}
    >
      <Container
        sx={{
          display: 'flex'
        }}
      >
        <Content {...itemCard} />

        <Jobs data={jobs} />
      </Container>
    </Box>
  )
}
