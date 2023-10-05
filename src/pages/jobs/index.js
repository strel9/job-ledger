import React from 'react'
import { useSelector } from 'react-redux'

import { API_URL, JOBS_GET } from 'constants/links'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Filter from './Filter'
import Content from './Content'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export const getServerSideProps = async ({ query }) => {
  const page = await query.page || 0

  return {
    props: {
      page
    }
  }
}

export default function JobsPage (props) {
  const classes = useClasses(styles)

  const [jobsData, setJobsData] = React.useState([])
  const [jobsCount, setJobsCount] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)
  const [offset, setOffset] = React.useState(0)
  const [limit, setLimit] = React.useState(10)

  // const offset = useSelector(state => state.data.offset)
  // const limit = useSelector(state => state.data.limit)
  const filterSearch = useSelector(state => state.filter.filterSearch)
  const serviceActive = useSelector(state => state.filter.serviceActive)
  const industryActive = useSelector(state => state.filter.industryActive)
  const seniorityActive = useSelector(state => state.filter.seniorityActive)
  // const salaryMinMax = useSelector(state => state.filter.salaryMinMax)
  const locationSearch = useSelector(state => state.filter.locationSearch)
  const firmSearch = useSelector(state => state.filter.firmSearch)
  const firmActive = useSelector(state => state.filter.firmActive)

  const handleOffset = (value) => {
    setOffset(value)
  }
  const handleLimit = (value) => {
    setLimit(value)
  }

  React.useEffect(() => {
    async function fetchData () {
      const response =
      await fetch(`${API_URL}${JOBS_GET}/?offset=${offset}&limit=${limit}
      &filterSearch=${filterSearch}&service=${serviceActive}&industrie=${industryActive}
      &seniority=${seniorityActive}&location=${locationSearch}&firmSearch=${firmSearch}
      &firmActive=${firmActive}`)

      const jobsDataFetch = await response.json()
      const jobs = jobsDataFetch.jobs
      // console.log(jobs)
      const jobsCount = jobsDataFetch.job_count
      // console.log(jobsCount)

      // setJobsData([...jobsData, ...jobs])
      setJobsData(jobs)
      setJobsCount(jobsCount)
      setIsLoading(false)
    }
    fetchData()
  }, [offset, limit, filterSearch, serviceActive, industryActive, seniorityActive,
    locationSearch, firmSearch, firmActive])

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

        <Content
          jobs={jobsData}
          jobsCount={jobsCount}
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
