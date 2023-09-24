import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns'

import {
  setFilterSearch,
  setServisesActive,
  setIndustriesActive,
  setSeniorityActive,
  setLocationSearch,
  setFirmSearch,
  setFirmActive,
  setSalaryMinMax
} from 'redux/filter/slice'

import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Skeleton from '@mui/material/Skeleton'

import CardJob from 'components/CardJob'

import CloseIcon from '@mui/icons-material/Close'
import EllipseIcon from 'icons/EllipseIcon'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function JobsContent (props) {
  // const {  } = props
  const classes = useClasses(styles)

  const [isSeeMoreList, setIsSeeMoreList] = React.useState(6)

  const dispatch = useDispatch()

  const isLoading = useSelector(state => state.data.isLoading)
  const jobsData = useSelector(state => state.data.jobs)
  const filteredJobs = useSelector(state => state.filter.filteredJobs)

  // const filterSearch = useSelector(state => state.filter.filterSearch)
  const servicesActive = useSelector(state => state.filter.servicesActive)
  const industriesActive = useSelector(state => state.filter.industriesActive)
  const seniorityActive = useSelector(state => state.filter.seniorityActive)
  // const locationSearch = useSelector(state => state.filter.locationSearch)
  // const firmSearch = useSelector(state => state.filter.firmSearch)
  const firmActive = useSelector(state => state.filter.firmActive)
  const salaryMinMax = useSelector(state => state.filter.salaryMinMax)

  const TODAY_DATE = format(new Date(), 'MMMM dd, yyyy')
  const FILTERS = [
    {
      service: servicesActive,
      onDeleteFunc: () => dispatch(setServisesActive(''))
    },
    {
      service: industriesActive,
      onDeleteFunc: () => dispatch(setIndustriesActive(''))
    },
    {
      service: seniorityActive,
      onDeleteFunc: () => dispatch(setSeniorityActive(''))
    },
    {
      service: firmActive,
      onDeleteFunc: () => dispatch(setFirmActive(''))
    }
  ]

  const handleDeleteAll = () => {
    dispatch(setServisesActive(''))
    dispatch(setIndustriesActive(''))
    dispatch(setSeniorityActive(''))
    dispatch(setSalaryMinMax(false))
    dispatch(setFirmActive(''))
  }

  const renderFilters = (service, onDeleteFunc) => (
    service && (
      <Chip
        label={`Service: ${service}`}
        color='primary' variant='outlined'
        deleteIcon={<CloseIcon />}
        onDelete={() => onDeleteFunc()}
      />)
  )

  return (
    <Box
      className={classes.root}
      sx={{
        flexBasis: '70%'
      }}
    >
      <Typography
        variant='h2' color='primary.purple'
        sx={{ mb: 2.4 }}
      >
        Last active positions
      </Typography>

      {(servicesActive || industriesActive || seniorityActive ||
      salaryMinMax || firmActive) && (
        <Stack
          direction='row' spacing={1} useFlexGap flexWrap='wrap'
          sx={{ mb: 2.4 }}
        >
          {FILTERS.map(({ service, onDeleteFunc }) => (
            renderFilters(service, onDeleteFunc)
          ))}

          {salaryMinMax && (
            <Chip
              label={`Salary: $${salaryMinMax[0]}-$${salaryMinMax[1]}`}
              color='primary' variant='outlined'
              deleteIcon={<CloseIcon />}
              onDelete={() => dispatch(setSalaryMinMax(false))}
              disabled
            />)}

          {(servicesActive || industriesActive || seniorityActive ||
            salaryMinMax || firmActive) && (
              <Chip
                color='primary' label='Clear all'
                onClick={() => handleDeleteAll()}
                disabled
              />)}
        </Stack>)}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2.4
        }}
      >
        <Typography sx={{ mr: 1 }}>
          {jobsData && jobsData.length} open jobs
        </Typography>

        <EllipseIcon />

        <Typography sx={{ ml: 1 }}>
          Updated {TODAY_DATE}
        </Typography>
      </Box>

      <Grid
        className={classes.positions}
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {isLoading
          ? (Array.from(Array(6)).map((item, index) =>
            <Grid xs={2} sm={12} md={6} key={index}>
              <Skeleton variant='rounded' width={360} height={210} />
            </Grid>
            ))
          : (filteredJobs.map((item, index) => index < isSeeMoreList && (
            <Grid xs={2} sm={12} md={6} key={index}>
              <CardJob {...item} />
            </Grid>)))}
      </Grid>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        pt: 3.2
      }}
      >
        {(filteredJobs.length > isSeeMoreList) && (
          <Button
            variant='text'
            onClick={() => setIsSeeMoreList(1000)}
          >
            See more jobs
          </Button>
        )}
      </Box>
    </Box>
  )
}
