import React from 'react'
import Link from 'next/link'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
// import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// import HeroLogo from 'icons/HeroLogo'
// import BackgroundGlow from 'icons/BackgroundGlow'

import { JOBS_LINK } from 'constants/links'

// import useClasses from 'hooks/useClasses'
// import styles from './styles'

export default function HeroSection (props) {
  // const classes = useClasses(styles)
  const { jobsCount } = props

  // const z = styled('div')(({ theme }) => ({

  // }))

  const ButtonStyled = styled(Button)(({ theme }) => ({
    minWidth: '428px',
    color: '#FAFAFA',
    // fontSize: '18px',
    // color: `linear-gradient(to bottom, ${palette.lightBlue} 29%, ${palette.purple} 81%)`,
    backgroundImage: 'linear-gradient(to right, #46C1EB 29%, #7967ED 81%)',
    // transition: 'background-color 2s ease-out 100ms',
    // transition: '0.3s',
    // border: [['100px', 'solid', '#4780ED']],
    // border: 'none'
    // borderRadius: '100px'
    // borderWidth: '4px',
    // borderStyle: 'solid'
    // borderImage: 'linear-gradient(to right, #46C1EB, #7D5FEC) 1'
    // background:
    // `
    // linear-gradient(${'white'}, ${'white'}) padding-box,
    // linear-gradient(${'to right'}, ${'#46C1EB'}, ${'#7967ED'}) border-box
    // `,
    // // borderRadius: '80px',
    // border: [['104px', 'solid', 'transparent']]

    // [breakpoints.down('sm')]: {
    //   minWidth: '140px'
    // },

    '&:hover': {
      backgroundImage: 'linear-gradient(to right, #46C1EB 0%, #7967ED 91%)'
    }
  }))

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
            // className={classes.title}
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

          <ButtonStyled
            // className={classes.btn}
            component={Link}
            href={JOBS_LINK}
            // variant='outlined'
          >
            See all {jobsCount} jobs
          </ButtonStyled>
        </Box>
      </Container>
    </Box>
  )
}
