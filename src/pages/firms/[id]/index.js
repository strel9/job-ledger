import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { API_URL } from 'constants/api'
import { FIRMS } from 'constants/links'
// import FIRMS_DATA from 'data/FIRMS.json'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Button from '@mui/material/Button'

import LocationIcon from 'icons/LocationIcon'
import RankIcon from 'icons/RankIcon'
import RolesIcon from 'icons/RolesIcon'
// import MooreLogo from 'icons/MooreLogo'
import ArrowLeftIcon from 'icons/ArrowLeftIcon'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function FirmDetails (props) {
  const classes = useClasses(styles)

  // const {} = props

  const router = useRouter()
  const { id: pathID } = router.query

  const [firm, setFirm] = React.useState()

  React.useEffect(() => {
    fetch(`${API_URL}${FIRMS}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setFirm(arr)
      })
  }, [])

  const itemCard = firm?.find(item => parseInt(item.id) === parseInt(pathID))

  const CARD_INFO = [
    {
      icon: <LocationIcon />,
      title: itemCard?.location
    },
    {
      icon: <RankIcon />,
      title: itemCard?.ranking
    },
    {
      icon: <RolesIcon />,
      title: itemCard?.roles
    }
  ]

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
          href={FIRMS}
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
          height: 150,
          // borderRadiusTop: 2.4,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24

        }}
        >
          {/* <MooreLogo /> */}
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
            sx={{ fontWeight: 700, mb: 1.1 }}
          >
            {itemCard?.name}
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

          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}
          >
            <Typography
              variant='h3'
              color='primary.blue'
              sx={{ fontWeight: 700, mb: 2.4, mr: 3.5 }}
            >
              About
            </Typography>

            <Typography
              variant='h3'
              color='primary.darkGray'
              sx={{ fontWeight: 700, mb: 2.4 }}
            >
              Jobs
            </Typography>
          </Box>

          <Box sx={{ mb: 2.3 }}>
            <Typography
              variant='body1'
              align='center'
            >
              {itemCard?.about}
            </Typography>
          </Box>

          <Image
            src='/quality.jpg'
            alt='quality'
            width={1024}
            height={456}
            priority
          />
        </Box>
      </Container>
    </Box>
  )
}
