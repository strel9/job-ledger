import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from 'components/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Skeleton from '@mui/material/Skeleton'

import CardArticle from 'components/CardArticle'

import EllipseIcon from 'icons/EllipseIcon'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function ArticlesContent (props) {
  const classes = useClasses(styles)

  const [isSeeMoreList, setIsSeeMoreList] = React.useState(6)

  const isLoading = useSelector(state => state.data.isLoading)
  const articlesData = useSelector(state => state.data.articlesData)
  const filteredArticles = useSelector(state => state.filter.filteredArticles)

  const TODAY_DATE = format(new Date(), 'MMMM dd, yyyy')
  return (
    <Box
      className={classes.root}
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
          my: [0.5, 1.9]
        }}
      >
        <Typography sx={{ mr: 1 }}>
          {filteredArticles?.length} articles
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
            <Grid xs={2} sm={3} md={6} key={index}>
              <Skeleton variant='rounded' width={360} height={210} />
            </Grid>
            )))
          : (filteredArticles.map((item, index) => index < isSeeMoreList && (
            <Grid xs={2} sm={3} md={6} key={index}>
              <CardArticle {...item} />
            </Grid>
            )))}
      </Grid>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        pt: 3.2
      }}
      >
        {(articlesData?.length > isSeeMoreList) && (
          <Button
            variant='text'
            onClick={() => setIsSeeMoreList(1000)}
          >
            See more insights
          </Button>
        )}
      </Box>
    </Box>
  )
}
