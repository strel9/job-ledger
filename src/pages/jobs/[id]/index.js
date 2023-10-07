import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { API_URL, JOB_DETAILS_GET, JOBS_LINK } from 'constants/links'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'

import ArrowLeftIcon from 'icons/ArrowLeftIcon'
import LocationIcon from 'icons/LocationIcon'
import WatchIcon from 'icons/WatchIcon'
import DollarIcon from 'icons/DollarIcon'

// import useClasses from 'hooks/useClasses'
// import styles from './styles'

export const getServerSideProps = async (context) => {
  const { id } = context.params
  const response = await fetch(`${API_URL}${JOB_DETAILS_GET}/${id}`)
  const data = await response.json()
  return {
    props: { job: data }
  }
}

export default function JobDetails (props) {
  const { job } = props

  // const classes = useClasses(styles)

  const CARD_INFO = [
    {
      icon: <LocationIcon />,
      title: job?.location
    },
    {
      icon: <WatchIcon />,
      title: job?.employment
    },
    {
      icon: <DollarIcon />,
      title: job?.salary
    }
  ]

  function createMarkup () {
    return { __html: job?.description }
  }

  return (
    <Box
      // className={classes.root}
      sx={{
        pt: 14.8,
        pb: 10,
        bgcolor: 'primary.bg'
      }}
    >
      <Container>
        <Button
          component={Link}
          href={JOBS_LINK}
        >
          <ArrowLeftIcon />
          <Box
            component='span'
            sx={{
              ml: 1,
              fontSize: 18
            }}
          >Back to all positions
          </Box>
        </Button>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'primary.ultraLightBlue',
          mb: 3.2,
          height: 150

        }}
        >
          <Image
            src={job?.firm_logo}
            alt={job?.firm_name}
            width={280}
            height={50}
            priority
          />
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
          <Typography
            variant='h1'
            align='center'
            sx={{ fontWeight: 700, mb: 1.1 }}
          >
            {job?.job_title}
          </Typography>

          <Typography
            variant='h3'
            color='primary.darkGray'
            sx={{ fontWeight: 700, mb: 2.4 }}
          >
            {job?.service}
          </Typography>

          <Box sx={{ display: 'flex', mb: 4 }}>
            {CARD_INFO.map((item, index) => (
              <Grid
                key={index}
                xs={2} sm={4} md={6}
                sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  ml: 2.4,
                  mr: 0.8
                }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant='body1'
                  color='primary.black'
                  sx={{
                    fontWeight: 600
                    // whiteSpace: 'nowrap'
                  }}
                >{item.title}
                </Typography>
              </Grid>
            ))}
          </Box>

          <Box
            sx={{
              mb: 2.3,
              color: '#242A35'
            }}
            dangerouslySetInnerHTML={createMarkup()}
          />

          <Button
            variant='contained'
          >
            Apply for job
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
