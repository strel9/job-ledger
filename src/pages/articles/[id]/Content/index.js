import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'

import ArrowLeftIcon from 'icons/ArrowLeftIcon'
import ArticleIcon from 'icons/ArticleIcon'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function Content (props) {
  const classes = useClasses(styles)
  const { img, about, name, description, time_read } = props

  return (
    <Box
      className={classes.root}
      sx={{
        flexBasis: '70%'
      }}
    >
      <Button>
        <ArrowLeftIcon />

        <Box
          component='span'
          sx={{
            ml: 1,
            fontSize: '18px'
          }}
        >Back to all positions
        </Box>
      </Button>

      <Box>
        <CardMedia
          component='img'
          height='194'
          // image='/insights.jpg'
          image={img}
          alt={about}
          sx={{
            mb: 2.4
          }}
        />

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        >
          <Typography
            variant='h4'
            sx={{
              mb: 0.8
            }}
          >
            {/* Is there more to work than money? */}
            {name}
          </Typography>

          <Typography
            variant='caption'
            color='primary.darkGray'
            sx={{
              mb: 1.6
            }}
          >
            {/* Understanding compensation */}
            {about}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2.4
            }}
          >
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            >
              <ArticleIcon />
            </Box>

            <Typography
              variant='caption'
              color='primary.darkGray'
            >
              {/* 7 minutes article */}
              {time_read}
            </Typography>
          </Box>

          <Typography
            variant='body1'
            sx={{
              fontWeight: 600,
              mb: 3.6
            }}
          >
            {/* Exploring the possible reasons and considerations involved in taking a pay cut. */}
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
