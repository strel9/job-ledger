import React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
// import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// import Button from 'components/Button'

// import HeroLogo from 'icons/HeroLogo'
// import BackgroundGlow from 'icons/BackgroundGlow'

import { JOBS_LINK } from 'constants/links'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function HeroSection (props) {
  const classes = useClasses(styles)
  const { jobsQuontity } = props

  return (
    <Box sx={{
      // position: 'relative'
      // zIndex: -10
      // bgcolor: 'primary.bg'
    }}
    >
      {/* <Box
        sx={{
          zIndex: -20,
          position: 'absolute'
          // top: 0
          // right: '1%',
        }}
      >
        <BackgroundGlow />
      </Box> */}

      <Container
        sx={{
          pt: 25.4,
          pb: 17,
          display: 'flex',
          justifyContent: 'center'
        }}
      >

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1000px'
          }}
        >
          <Typography
            className={classes.title}
            variant='h1'
            textAlign='center'
            color='primary.purple'
            sx={{
              mb: 2.1
              // zIndex: 20
            }}
          >
            <Box
              component='span'
              color='primary.black'
              sx={{
              }}
            >
              Matching
            </Box>
            {' '}
            TOP ACCOUNTANTS
            {' '}
            <Box
              component='span'
              color='primary.black'
              sx={{
              }}
            >
              with
            </Box>
            {' '}
            <span>TOP FIRMS</span>
          </Typography>

          <Button
            className={classes.btn}
            component={Link}
            href={JOBS_LINK}
            // variant='outlined'
          >
            See all {jobsQuontity} jobs
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
