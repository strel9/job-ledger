import React from 'react'
import { useDispatch } from 'react-redux'

import { setFilteredArticles } from 'redux/filter/slice'
import { setArticles, setIsLoading } from 'redux/data/slice'

import { API_URL } from 'constants/api'
import { ARTICLES_GET } from 'constants/links'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Filter from './Filter'
import Content from './Content'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function ArticlesPage (props) {
  const classes = useClasses(styles)
  const dispatch = useDispatch()

  React.useEffect(() => {
    fetch(`${API_URL}${ARTICLES_GET}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        dispatch(setArticles(arr))
        dispatch(setFilteredArticles(arr))
        dispatch(setIsLoading(false))
      })
  }, [])

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
        <Filter />

        <Content />
      </Container>
    </Box>
  )
}
