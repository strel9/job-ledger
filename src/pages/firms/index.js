import React from 'react'
import { useDispatch } from 'react-redux'

import { setFilteredFirms } from 'redux/filter/slice'
import { setFirms, setIsLoading } from 'redux/data/slice'

import { API_URL } from 'constants/api'
import { FIRMS } from 'constants/links'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Filter from './Filter'
import Content from './Content'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function FirmsPage () {
  const classes = useClasses(styles)
  const dispatch = useDispatch()

  React.useEffect(() => {
    fetch(`${API_URL}${FIRMS}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        dispatch(setFirms(arr))
        dispatch(setFilteredFirms(arr))
        dispatch(setIsLoading(false))
      })
  }, [])

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
      <Container
        sx={{ display: 'flex' }}
      >
        <Filter />

        <Content />
      </Container>
    </Box>
  )
}
