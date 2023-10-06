import React from 'react'
import Link from 'next/link'

// import { useSelector, useDispatch } from 'react-redux'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Skeleton from '@mui/material/Skeleton'

import CardJobs from 'components/CardJob'

import ArrowRightIcon from 'icons/ArrowRightIcon'

import { JOBS_LINK } from 'constants/links'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function JobsActivePositions (props) {
  const classes = useClasses(styles)
  const { data, jobsCount } = props

  // const isLoading = useSelector(state => state.data.isLoading)

  // const dispatch = useDispatch()

  return (
    <Box
      className={classes.root}
      sx={{
        pb: 10
        // bgcolor: 'primary.bg'
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2.4
          }}
        >
          <Typography
            variant='h2'
            color='primary.black'
          >
            <Box
              component='span'
              sx={{ pr: 1, color: 'primary.purple' }}
            >Active
            </Box>
            positions
          </Typography>

          <Button
            component={Link}
            href={JOBS_LINK}
          >
            <Box
              component='span'
              sx={{
                mr: 1,
                fontSize: '18px'
              }}
            >See all {jobsCount} jobs
            </Box>
            <ArrowRightIcon />
          </Button>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {(data?.map((item, index) => (
            index < 6 && (
              <Grid xs={4} sm={4} md={4} key={index}>
                <CardJobs {...item} />
              </Grid>
            ))
          ))}
          {/* {isLoading
            ? (Array.from(Array(6)).map((item, index) =>
              <Grid xs={4} sm={4} md={4} key={index}>
                <Skeleton variant='rounded' width={360} height={210} />
              </Grid>
              ))
            : (data.map((item, index) => (
                index < 6 && (
                  <Grid xs={4} sm={4} md={4} key={index}>
                    <CardJobs {...item} />
                  </Grid>
                ))
              ))} */}
        </Grid>
      </Container>
    </Box>
  )
}
