import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { API_URL } from 'constants/api'
import { JOBS_GET } from 'constants/links'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'

import ArrowLeftIcon from 'icons/ArrowLeftIcon'
import LocationIcon from 'icons/LocationIcon'
import WatchIcon from 'icons/WatchIcon'
import DollarIcon from 'icons/DollarIcon'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function JobDetails (props) {
  const classes = useClasses(styles)

  // const { location, ranking, roles } = props

  const router = useRouter()
  const { id: pathID } = router.query

  const [job, setJob] = React.useState()

  const itemCard = job?.find(item => parseInt(item.id) === parseInt(pathID))

  React.useEffect(() => {
    fetch(`${API_URL}${JOBS_GET}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setJob(arr)
      })
  }, [])

  const CARD_INFO = [
    {
      icon: <LocationIcon />,
      title: itemCard?.location
    },
    {
      icon: <WatchIcon />,
      title: itemCard?.employment
    },
    {
      icon: <DollarIcon />,
      title: itemCard?.salary
    }
  ]

  function createMarkup() {
    return {__html: itemCard?.description};
  }

  return (
    <Box
      className={classes.root}
      sx={{
        pt: 14.8,
        pb: 10,
        bgcolor: 'primary.bg'
      }}
    >
      <Container>
        <Button
          component={Link}
          href={JOBS_GET}
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
          {itemCard?.logo}
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
            {itemCard?.job_title}
          </Typography>

          <Typography
            variant='h3'
            color='primary.darkGray'
            sx={{ fontWeight: 700, mb: 2.4 }}
          >
            {itemCard?.service}
          </Typography>

          <Box sx={{ display: 'flex', mb: 4 }}>
            {/* <Grid
            container spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          > */}
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
            {/* </Grid> */}
          </Box>

          <Typography className={classes.richText}
           sx={{ mb: 2.3 }}>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </Typography>

          <Button
            variant='contained'
            onClick={console.log('APPLY JOB')}
          >
            Apply for job
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
