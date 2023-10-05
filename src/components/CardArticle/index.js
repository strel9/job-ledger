import React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

import ArticleIcon from 'icons/ArticleIcon'

import { ARTICLE_DETAILS_LINK } from 'constants/links'

import useClasses from 'hooks/useClasses'

import styles from './styles'

export default function CardArticle (props) {
  const classes = useClasses(styles)

  const {
    description,
    title,
    tagline,
    writer_image: writerImage,
    time_read: timeRead,
    id
  } = props

  return (
    <Box
      className={classes.root}
      component={Link}
      href={`${ARTICLE_DETAILS_LINK}/${id}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: 2.4,
        px: 2.4
      }}
    >

      <Box
        sx={{
        }}
      >
        <CardMedia
          component='img'
          image={writerImage}
          alt={title}
        />

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
