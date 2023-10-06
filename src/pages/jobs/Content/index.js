import React from 'react'
import Link from 'next/link'
// import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns'

// import { setOffset } from 'redux/data/slice'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Skeleton from '@mui/material/Skeleton'
import Pagination from '@mui/material/Pagination'

import CardJob from 'components/CardJob'

import FiltersStack from './FiltersStack'

import EllipseIcon from 'icons/EllipseIcon'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function JobsContent (props) {
  const classes = useClasses(styles)
  const {
    jobs, jobsCount, isLoading, offset, limit,
    handleOffset, handleLimit
  } = props
  // console.log(jobs.length)
  // const dispatch = useDispatch()

  // const isLoading = useSelector(state => state.data.isLoading)
  // const offset = useSelector(state => state.data.offset)

  const TODAY_DATE = format(new Date(), 'MMMM dd, yyyy')

  return (
    <Box
      className={classes.root}
      sx={{
        flexBasis: '70%'
      }}
    >
      <>
        <Typography
          variant='h2' color='primary.purple'
          sx={{ mb: 2.4 }}
        >
          Last active positions
        </Typography>

        <FiltersStack />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2.4
          }}
        >
          <Typography sx={{ mr: 1 }}>
            {jobsCount && jobsCount} open jobs
          </Typography>

          <EllipseIcon />

          <Typography sx={{ ml: 1 }}>
            Updated {TODAY_DATE}
          </Typography>
        </Box>
      </>

      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {
        isLoading
          ? (Array.from(Array(6)).map((item, index) =>
            <Grid xs={4} sm={8} md={6} key={index}>
              <Skeleton variant='rounded' width={360} height={210} />
            </Grid>
            ))
          : (
              jobs?.map((item, index) => (
                <Grid xs={4} sm={8} md={6} key={index}>
                  <CardJob {...item} />
                </Grid>))
            )
            }
      </Grid>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 3.2
      }}
      >
        {/* <Stack spacing={2}>
          <Pagination
            count={jobsCount % 10}
            page={offset / 10 + 1}
            onChange={(event, value) => handleOffset(value * 10 - 10)}
            variant='outlined' shape='rounded' color='primary'
          />
        </Stack> */}

        {/* {!(jobs.length < 10) && jobsCount > 10  && ( */}
        {!(jobsCount <= limit) && (
          <Button
            component={Link}
            // onClick={() => setOffset(offset + 10)}
            onClick={(e) => {
              e.preventDefault()
              handleLimit(limit + 10)
            }}
            // href={`/jobs?page=${offset / 10}`}
            href='/jobs?page'
            variant='text'
          >
            See more jobs
          </Button>
        )}
      </Box>
    </Box>
  )
}
