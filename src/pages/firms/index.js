import React from 'react'
import { useSelector } from 'react-redux'

import { API_URL, FIRMS_GET } from 'constants/links'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Filter from './Filter'
import Content from './Content'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function FirmsPage () {
  const classes = useClasses(styles)

  const [firmsData, setFirmsData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [offset, setOffset] = React.useState(0)
  const [limit, setLimit] = React.useState(10)

  // const offset = useSelector(state => state.data.offset)
  // const limit = useSelector(state => state.data.limit)
  // const filterSearch = useSelector(state => state.filter.filterSearch)
  const firmSearch = useSelector(state => state.filter.firmSearch)
  const firmActive = useSelector(state => state.filter.firmActive)
  // const firmRankMinMax = useSelector(state => state.filter.firmRankMinMax)
  const locationSearch = useSelector(state => state.filter.locationSearch)

  const handleOffset = (value) => {
    setOffset(value)
  }
  const handleLimit = (value) => {
    setLimit(value)
  }

  React.useEffect(() => {
    async function fetchData () {
      const response =
      // await fetch(`${API_URL}${FIRMS_GET}/?offset=${offset}&limit=${limit}`)
      await fetch(`${API_URL}${FIRMS_GET}`)

      const data = await response.json()

      // setJobsData([...data, ...firm])
      setFirmsData(data)
      // setFirmsCount(firmCount)
      setIsLoading(false)
    }
    fetchData()
  }, [offset, limit, firmSearch, firmActive, locationSearch])

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

        <Content
          firmsData={firmsData}
          isLoading={isLoading}
          offset={offset}
          limit={limit}
          handleOffset={handleOffset}
          handleLimit={handleLimit}
        />
      </Container>
    </Box>
  )
}
