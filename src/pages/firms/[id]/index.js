import React from 'react'
import Link from 'next/link'

import { API_URL, FIRMS_LINK, FIRM_DETAILS_GET, JOBS_BY_FIRM_GET } from 'constants/links'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'

import TabsComponent from './TabsComponent'

import LocationIcon from 'icons/LocationIcon'
import RankIcon from 'icons/RankIcon'
import RolesIcon from 'icons/RolesIcon'
import ArrowLeftIcon from 'icons/ArrowLeftIcon'

// import useClasses from 'hooks/useClasses'
// import styles from './styles'

export const getServerSideProps = async (context) => {
  const { id } = context.params

  const response = await fetch(`${API_URL}${FIRM_DETAILS_GET}/${id}`)
  const firmData = await response.json()

  const responseJobs = await fetch(`${API_URL}${JOBS_BY_FIRM_GET}/${id}`)
  const jobsData = await responseJobs.json()

  const responseAbout = await fetch(`${API_URL}${firmData?.about}`)
  const aboutMarkdown = await responseAbout.text()

  return {
    props: {
      firm: firmData,
      jobs: jobsData,
      // id,
      aboutMarkdown
    }
  }
}

export default function FirmDetails (props) {
  // const classes = useClasses(styles)
  const { firm, jobs, aboutMarkdown, iSnumber = true } = props

  const CARD_INFO = [
    {
      icon: <LocationIcon />,
      title: firm?.location,
      number: ''
    },
    {
      icon: <RankIcon />,
      title: 'Ranking',
      number: firm?.ranking
    },
    {
      icon: <RolesIcon />,
      title: 'Roles live',
      number: firm?.jobs_count
    }
  ]

  return (
    <Box
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
          <Box>
            <CardMedia
              component='img'
              height='60'
              image={`${API_URL}${firm?.logo}`}
              alt={firm?.name}
            />
          </Box>
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

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2
          }}
          >
            {CARD_INFO.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  ...(index > 0 && {
                    marginLeft: 2.4
                  })
                }}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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

                {iSnumber && (
                  <Typography
                    variant='body1'
                    color='primary.black'
                    sx={{
                      fontWeight: 600,
                      ml: 0.8,
                      fontSize: '20px'
                    }}
                  >{item.number}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>

          <TabsComponent firm={firm} jobs={jobs} aboutMarkdown={aboutMarkdown} />

        </Box>
      </Container>
    </Box>
  )
}
