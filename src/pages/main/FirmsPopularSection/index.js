import React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Unstable_Grid2'
import CardFirms from 'components/CardFirm'

import ArrowRightIcon from 'icons/ArrowRightIcon'

import { FIRMS_LINK } from 'constants/links'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function FirmsPopular (props) {
  const classes = useClasses(styles)
  const { data } = props

  return (
    <Box
      className={classes.root}
      sx={{
        // display: 'flex',
        // alignItems: 'center',
        pb: 10,
        bgcolor: 'primary.bg'
        // maxWidth: '887px'
      }}
    >
      <Container>
        <Box
          // component='main'
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2.4
            // maxWidth: '887px'
          }}
        >
          <Typography
            variant='h2'
            color='primary.black'
            sx={{
              flexBasis: { xs: '60%' }
            }}
          >
            <Box
              component='span'
              sx={{
                color: 'primary.purple'
              }}
            >Popular firms
            </Box>
            {' '}
            hiring on Job Board
          </Typography>

          <Button
            component={Link}
            href={FIRMS_LINK}
          >
            <Box
              component='span'
              sx={{
                mr: 1,
                fontSize: '18px'
              }}
            >See all firms
            </Box>
            <ArrowRightIcon />
          </Button>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data?.map((item, index) => (
            index < 6 && (
              <Grid xs={4} sm={4} md={4} key={index}>
                <CardFirms {...item} />
              </Grid>
            )
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
