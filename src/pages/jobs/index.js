import React from 'react'
import { useDispatch } from 'react-redux'

import { setFilteredJobs } from 'redux/filter/slice'

import { setJobs, setIsLoading } from 'redux/data/slice'

import { API_URL } from 'constants/api'
import { JOBS_GET } from 'constants/links'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Filter from './Filter'
import Content from './Content'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function JobsPage () {
  const classes = useClasses(styles)

  const dispatch = useDispatch()

  React.useEffect(() => {
    fetch(`${API_URL}${JOBS_GET}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        dispatch(setJobs(arr))
        dispatch(setFilteredJobs(arr))
        dispatch(setIsLoading(false))
      })
  }, [])

  return (
    <Box
      className={classes.root}
      component='div'
      sx={{
        pt: 14.8,
        pb: 10.8,
        bgcolor: 'primary.bg'
      }}
    >
      <Container
        sx={{ display: 'flex' }}
      >
        <Filter />

        <Content />
      </Container>
    </Box>
  )
}
