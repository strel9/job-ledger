import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import CardJobs from 'components/CardJob'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function Filter (props) {
  const classes = useClasses(styles)
  const { data } = props

  const [isSeeMoreList, setIsSeeMoreList] = React.useState(3)

  return (
    <Box
      sx={{
        flexBasis: '30%',
        ml: 2
      }}
    >
      <Typography
        variant='h2' color='primary.purple'
        sx={{
          mt: 3,
          mb: 2.4
        }}
      >
        Find your best work
      </Typography>

      <Grid
        className={classes.positions}
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
        sx={{
          mb: 1.4
        }}
      >
        {data?.map((item, index) => index < isSeeMoreList && (
          <Grid xs={12} sm={12} md={12} key={index}>
            <CardJobs {...item} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {(data?.length > isSeeMoreList) && (
          <Button
            align='center'
            onClick={() => setIsSeeMoreList(1000)}
          >
            See more jobs
          </Button>
        )}
      </Box>
    </Box>
  )
}
