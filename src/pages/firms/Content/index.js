import React from 'react'
import Link from 'next/link'

import { format } from 'date-fns'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Skeleton from '@mui/material/Skeleton'

import CardFirm from 'components/CardFirm'

import EllipseIcon from 'icons/EllipseIcon'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function FirmsContent (props) {
  const classes = useClasses(styles)
  const {
    firmsData, isLoading, offset, limit,
    handleOffset, handleLimit
  } = props

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
        sx={{ mb: 2.4 }}
      >
        Firms
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2.4
        }}
      >
        <Typography sx={{ mr: 1 }}>
          {firmsData?.length} open firms
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
          ? (Array.from(Array(6)).map((item, index) =>
            <Grid xs={4} sm={8} md={6} key={index}>
              <Skeleton variant='rounded' width={360} height={210} />
            </Grid>
            ))
          : (firmsData.map((item, index) =>
            <Grid xs={4} sm={8} md={6} key={index}>
              <CardFirm {...item} />
            </Grid>
            ))}
      </Grid>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        pt: 3.2
      }}
      >
        {firmsData.length >= offset && (
          <Button
            component={Link}
            onClick={(e) => {
              e.preventDefault()
              handleOffset(offset + 10)
            }}
            href={`/firms?offset=${offset}`}
            variant='text'
          >
            See more firms
          </Button>
        )}
      </Box>
    </Box>
  )
}
