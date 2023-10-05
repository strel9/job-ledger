import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { API_URL, FIRMS_LINK, FIRM_DETAILS_GET } from 'constants/links'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import LocationIcon from 'icons/LocationIcon'
import RankIcon from 'icons/RankIcon'
import RolesIcon from 'icons/RolesIcon'
import ArrowLeftIcon from 'icons/ArrowLeftIcon'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export const getServerSideProps = async (context) => {
  const { id } = context.params

  const response = await fetch(`${API_URL}${FIRM_DETAILS_GET}/${id}`)
  const data = await response.json()
  return {
    props: { firm: data }
  }
}

export default function FirmDetails (props) {
  const classes = useClasses(styles)

  const { firm } = props

  const CARD_INFO = [
    {
      icon: <LocationIcon />,
      title: firm?.location
    },
    {
      icon: <RankIcon />,
      title: firm?.ranking
    },
    {
      icon: <RolesIcon />,
      title: firm?.jobs_count
    }
  ]

  function createMarkup () {
    return { __html: firm?.about }
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
          href={FIRMS_LINK}
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
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24

        }}
        >
          <Image
            src={firm?.firm_logo}
            alt={firm?.firm_name}
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
            sx={{ fontWeight: 700, mb: 1.1 }}
          >
            {firm?.name}
          </Typography>

          <Box sx={{ display: 'flex', mb: 4 }}>
            {CARD_INFO.map((item, index) => (
              <Box
                key={index}
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
                  }}
                >{item.title}
                </Typography>
              </Box>
            ))}
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
              {/* {firm?.about} */}
              <div dangerouslySetInnerHTML={createMarkup()} />
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
