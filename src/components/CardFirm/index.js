import React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import LocationIcon from 'icons/LocationIcon'
import RankIcon from 'icons/RankIcon'
import RolesIcon from 'icons/RolesIcon'

import { FIRM_DETAILS_LINK } from 'constants/links'

import useClasses from 'hooks/useClasses'

import styles from './styles'

export default function CardFirms (props) {
  const classes = useClasses(styles)

  const {
    id, name, location, ranking, logo, jobs_count
  } = props

  const CARD_FIRM_ICONS = [
    {
      icon: <LocationIcon />,
      title: location,
      number: ''
    },
    {
      icon: <RankIcon />,
      title: 'Ranking',
      number: ranking
    },
    {
      icon: <RolesIcon />,
      title: 'Roles',
      number: jobs_count
    }
  ]

  return (
    <Box
      className={classes.root}
      component={Link}
      href={`${FIRM_DETAILS_LINK}/${id}`}
      sx={{
        // backgroundColor: 'primary.lightGray',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 2.4
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
      >
        <CardMedia
          component='img'
            // height=''
          image={logo}
          alt={name}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 1.5
        }}
      >
        {CARD_FIRM_ICONS.map((item, index) => (
          <Box
            key={item + index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 0.8
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >{item.icon}

              <Typography
                variant='body2'
                sx={{
                  ml: 0.8
                }}
              >{item.title}
              </Typography>
            </Box>

            <Typography
              variant='h4' component='span'
              sx={{
                ml: 1,
                ...(index === 0 && {
                  ml: 0.5,
                  fontWeight: 400,
                  fontSize: '16px'
                })
              }}
            >
              {item.number}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
