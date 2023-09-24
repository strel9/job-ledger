import React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

// import DuncanToplisLogo from 'images/DuncanToplisLogo'
// import MooreLogo from 'images/MooreLogo'

import LocationIcon from 'icons/LocationIcon'
import WatchIcon from 'icons/WatchIcon'
import DollarIcon from 'icons/DollarIcon'

import { JOB_DETAILS } from 'constants/links'

import useClasses from 'hooks/useClasses'

import styles from './styles'

export default function CardJob (props) {
  const classes = useClasses(styles)

  const {
    id, job_title: jobTitle, service,
    location, employment, salary,
    logo, variantCard
  } = props

  const CARD_JOB_ICONS = [
    {
      icon: <LocationIcon />,
      title: location
    },
    {
      icon: <WatchIcon />,
      title: employment
    },
    {
      icon: <DollarIcon />,
      title: salary
    }
  ]

  return (
    <Box
      className={classes.root}
      sx={{
        // height: '100%'
      }}
    >
      <Box
        component={Link}
        href={`${JOB_DETAILS}${id}`}
        sx={{
          // height: '100%'
        }}
      >
        <CardContent
          sx={{
            // height: '100%',
            pt: 2.4,
            px: 2.4
          }}
        >
          <Typography
            component='div'
            variant='h4'
            sx={{ mb: 0.8 }}
          >
            {jobTitle}
          </Typography>

          <Typography
            variant='body1'
            sx={{ mb: 1.6 }}
          >
            {service}
          </Typography>

          <Grid
            container
            spacing={0}
            columns={{ xs: 4, sm: 8, md: 12 }}
            // sx={{ p: 0 }}
          >
            {CARD_JOB_ICONS.map((item, index) => (
              <Grid
                key={item}
                md={6}
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mr: 0.4
                }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant='body2'
                >{item.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>

        {!variantCard && (
          <Box
            className={classes.cardFooter}
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: 'primary.ultraLightBlue',
              pl: '24px',
              pr: '44px',
              minHeight: 58,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16
            }}
          >
            <Typography
              className={classes.cardFooterText}
              variant='body1'
              sx={{
                fontWeight: 600,
                paddingRight: '16px'
              }}
            >
              By
            </Typography>

            {logo}
          </Box>
        )}
      </Box>

    </Box>
  )
}
