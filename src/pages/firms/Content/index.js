import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { format } from 'date-fns'

// import { setFilteredFirms } from 'redux/filter/slice'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from 'components/Button'
import Grid from '@mui/material/Unstable_Grid2'
import Skeleton from '@mui/material/Skeleton'

import CardFirm from 'components/CardFirm'

import EllipseIcon from 'icons/EllipseIcon'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function FirmsContent (props) {
  // const {  } = props
  const classes = useClasses(styles)

  const [isSeeMoreList, setIsSeeMoreList] = React.useState(6)
  // const dispatch = useDispatch()

  const isLoading = useSelector(state => state.data.isLoading)
  const firmsData = useSelector(state => state.data.firms)
  const filteredFirms = useSelector(state => state.filter.filteredFirms)
  console.log(filteredFirms)
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
          {filteredFirms?.length} open firms
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
          : (filteredFirms.map((item, index) => index < isSeeMoreList && (
            <Grid xs={2} sm={3} md={6} key={index}>
              <CardFirm {...item} />
            </Grid>
            )))}
      </Grid>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        pt: 3.2
      }}
      >
        {(firmsData.length > isSeeMoreList) && (
          <Button
            variant='text'
            onClick={() => setIsSeeMoreList(1000)}
          >
            See more firms
          </Button>
        )}
      </Box>
    </Box>
  )
}
