import React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

import LocationIcon from 'icons/LocationIcon'
import WatchIcon from 'icons/WatchIcon'
import DollarIcon from 'icons/DollarIcon'

import { API_URL, JOB_DETAILS_LINK } from 'constants/links'

import useClasses from 'hooks/useClasses'

import styles from './styles'

export default function CardJob (props) {
  const classes = useClasses(styles)

  const {
    id, job_title: jobTitle, service, location, employment, salary,
    firm_logo: firmLogo, firm_name: firmName
  } = props
  const CARD_JOB_ICONS = [
    {
      icon: <LocationIcon />,
      title: location ? location?.match(/(\w+)/)[0] : ''
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
        height: '100%'
      }}
    >
      <Box
        component={Link}
        href={`${JOB_DETAILS_LINK}/${id}`}
        sx={{
          height: '100%',
          display: 'flex',
          // alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            height: '100%',
            pt: 2.4,
            pb: 1.3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            component='div'
            variant='h4'
            sx={{ mb: 0.8 }}
          >
            {jobTitle}
          </Typography>

          <div>
            <Typography
              variant='body1'
              sx={{ mb: 1.6 }}
            >
              {service}
            </Typography>

            <Grid
              container
              spacing={0}
              columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
            >
              {CARD_JOB_ICONS.map((item, index) => (
                <Grid
                  key={item + index}
                  sm={8}
                  md={12}
                  lg={6}
                  sx={{
                    // height: '100%',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mr: 0.2
                  }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant='body2'
                    sx={{
                      fontSize: 15,
                      whiteSpace: 'nowrap'
                    }}
                  >{item.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>

        <Box
          className={classes.cardFooter}
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'primary.ultraLightBlue',
            pl: 2.4,
            pr: 4.4,
            minHeight: 58,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Typography
              variant='body1'
              color='primary.black'
              sx={{
                fontWeight: 600,
                paddingRight: '16px'
              }}
            >
              By
            </Typography>

            <CardMedia
              component='img'
              height='35'
              image={`${API_URL}${firmLogo}`}
              alt={firmName}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
