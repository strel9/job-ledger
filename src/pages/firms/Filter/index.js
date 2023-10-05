import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
  setFirmSearch,
  setFirmActive,
  setLocationSearch,
  setFirmRankMinMax
} from 'redux/filter/slice'

import { FIRMS_LIST } from 'constants/filters'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Search from 'components/Search'
import FilterCategories from 'components/FilterCategories'
import SliderRange from 'components/SliderRange'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function FirmsFilter (props) {
  const classes = useClasses(styles)

  const dispatch = useDispatch()

  const firmSearch = useSelector(state => state.filter.firmSearch)
  const firmRankMinMax = useSelector(state => state.filter.firmRankMinMax)
  const firmActive = useSelector(state => state.filter.firmActive)
  const locationSearch = useSelector(state => state.filter.locationSearch)

  return (
    <Box
      className={classes.root}
      sx={{
        flexBasis: '30%',
        pr: 2
      }}
    >
      <Typography
        variant='h2' color='primary.darkGray'
        sx={{ pb: 2.4 }}
      >
        Filter
      </Typography>

      <Search
        value={firmSearch}
        onChange={(e) => dispatch(setFirmSearch(e.target.value))}
      />

      <FilterCategories
        categories={FIRMS_LIST}
        activeCategory={firmActive}
        setActiveCategory={setFirmActive}
        isButton
      />

      <Search
        title='Location'
        value={locationSearch}
        onChange={(e) => dispatch(setLocationSearch(e.target.value))}
      />

      <SliderRange
        title='Rank'
        value={firmRankMinMax}
        setValue={setFirmRankMinMax}
        max={100}
        step={1}
      />
    </Box>
  )
}
