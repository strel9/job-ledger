import React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import ArticleIcon from 'icons/ArticleIcon'

import { ARTICLES_DETAILS } from 'constants/links'

import useClasses from 'hooks/useClasses'

import styles from './styles'

export default function CardInsights (props) {
  const { description, name, about, img, time_read, id } = props
  const classes = useClasses(styles)

  return (
    <div
      className={classes.root}
      href={`${ARTICLES_DETAILS}${id}`}
      component={Link}
      sx={{
        height: '100%'
      }}
    >
      <CardMedia
        component='img'
          // height='243'
          // image='/insights.jpg'
        image={img}
        alt={name}
      />

      <CardContent
        sx={{
          height: '100%'
        }}
      >
        <Typography
          variant='caption'
          color='primary.darkGray'
        >
          Understanding compensation
          {description}
        </Typography>

        <Typography
          variant='h4'
          color='primary.purple'
          sx={{ mb: 0.8 }}
        >
          Courage at work
          {name}
        </Typography>

        <Typography
          // className={classes.description}
          variant='body2'
          color='primary.text'
        >
          Exploring the possible reasons and considerations involved in taking a pay cut.
          {about}
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
            {/* 7 minutes article */}
            {time_read}
          </Typography>
        </Box>
      </CardContent>
    </div>
  )
}
