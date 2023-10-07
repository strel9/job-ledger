import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Unstable_Grid2'

import CardArticle from 'components/CardArticle'

export const getServerSideProps = async (context) => {
  return {
    props: {
    }
  }
}

export default function ArticlesBlock (props) {
  const { articles } = props

  return (
    <div>
      <Typography
        variant='h2' color='primary.purple'
        textAlign='center'
        sx={{
          mb: 2.4
        }}
      >
        You might also like
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >

        {articles?.map((item, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <CardArticle {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
