import React from 'react'
import Link from 'next/link'

import { format } from 'date-fns'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Skeleton from '@mui/material/Skeleton'

import CardArticle from 'components/CardArticle'

import EllipseIcon from 'icons/EllipseIcon'

// import useClasses from 'hooks/useClasses'
// import styles from './styles'

export default function ArticlesContent (props) {
  // const classes = useClasses(styles)

  const {
    articlesData, isLoading, offset, limit,
    handleOffset, handleLimit
  } = props

  const TODAY_DATE = format(new Date(), 'MMMM dd, yyyy')

  return (
    <Box
      // className={classes.root}
      sx={{
        flexBasis: '70%'
      }}
    >
      <Typography
        variant='h2' color='primary.purple'
        sx={{
          mb: 2.4
        }}
      >
        Insights
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          my: 2.4
        }}
      >
        <Typography sx={{ mr: 1 }}>
          {articlesData?.length} articles
        </Typography>

        <EllipseIcon />

        <Typography sx={{ ml: 1 }}>
          Updated {TODAY_DATE}
        </Typography>
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {isLoading
          ? (Array.from(Array(6)).map((item, index) => (
            <Grid xs={4} sm={8} md={6} key={index}>
              <Skeleton variant='rounded' width={360} height={210} />
            </Grid>
            )))
          : (articlesData?.map((item, index) => (
            <Grid xs={4} sm={8} md={6} key={index}>
              <CardArticle {...item} />
            </Grid>
            )))}
      </Grid>

      {!(articlesData?.length < 10) && (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: 3.2
        }}
        >
          <Button
            component={Link}
            onClick={(e) => {
            // e.preventDefault()
              handleOffset(offset + 10)
            }}
            href={`/firms?offset=${offset / 10}`}
            variant='text'
          >
            See more insights
          </Button>
        </Box>
      )}
    </Box>
  )
}
