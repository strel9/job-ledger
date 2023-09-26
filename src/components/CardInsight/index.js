import React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import ArticleIcon from 'icons/ArticleIcon'

import { ARTICLES_DETAILS } from 'constants/links'

import useClasses from 'hooks/useClasses'

import styles from './styles'

export default function CardInsights (props) {
  const { description, title, tagline, writer_image, time_read, id } = props
  const classes = useClasses(styles)

  return (
    <Box
      className={classes.root}
      component={Link}
      href={`${ARTICLES_DETAILS}${id}`}
      sx={{
        height: '100%'
      }}
    >
      <CardMedia
        component='img'
          // height='243'
        image={writer_image}
        alt={title}
      />

      <Box
        sx={{
          // height: '100%'
        }}
      >
        <Typography
          variant='caption'
          color='primary.darkGray'
        >
          {tagline}
        </Typography>

        <Typography
          variant='h4'
          color='primary.purple'
          sx={{ mb: 0.8 }}
        >
          {title}
        </Typography>

        <Typography
          // className={classes.description}
          variant='body2'
          color='primary.text'
          sx={{ mb: 0.8 }}
        >
          {description}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mr: 0.8
          }}
          >
            <ArticleIcon />
          </Box>

          <Typography
            variant='caption'
            color='primary.darkGray'
          >
            7 min
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
