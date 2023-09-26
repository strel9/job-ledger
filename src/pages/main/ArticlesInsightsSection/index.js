import React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'

import CardArticle from 'components/CardArticle'

import ArrowRightIcon from 'icons/ArrowRightIcon'

import useClasses from 'hooks/useClasses'
import styles from './styles'

import { ARTICLES_LINK } from 'constants/links'

export default function ArticlesInsights (props) {
  const classes = useClasses(styles)
  const { data } = props

  return (
    <Box
      className={classes.root}
      component='main'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 5,
        paddingBottom: 10
      }}

    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // maxWidth: '887px'
            mb: 2.4
          }}
        >

          <Typography variant='h2'>
            <Box
              component='span'
              sx={{
                color: 'primary.purple'
              }}
            >Latest
            </Box>
            {' '}
            insights
          </Typography>

          <Button
            color='secondary'
            component={Link}
            href={ARTICLES_LINK}
          >
            <Box
              component='span'
              sx={{
                mr: 1,
                fontSize: '18px'
              }}
            >See all insights
            </Box>
            <ArrowRightIcon color='primary.white' />
          </Button>
        </Box>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data?.map((item, index) => (
            index < 3 && (
              <Grid xs={2} sm={4} md={4} key={index}>
                <CardArticle {...item} />
              </Grid>)
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
