import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
  setFilterSearch,
  setServisesActive,
  setIndustriesActive,
  setSeniorityActive,
  setSalaryMinMax,
  setLocationSearch,
  setFirmSearch,
  setFirmActive
} from 'redux/filter/slice'

import { SERVICES_LIST, INDUSTRIES_LIST, SENIORITIES_LIST, FIRMS_LIST } from 'constants/filters'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import SliderRange from 'components/SliderRange'
import Search from 'components/Search'
import FilterCategories from 'components/FilterCategories'

// import useClasses from 'hooks/useClasses'
// import styles from './styles'

export default function JobsFilter (props) {
  // const classes = useClasses(styles)

  const dispatch = useDispatch()

  const filterSearch = useSelector(state => state.filter.filterSearch)
  const serviceActive = useSelector(state => state.filter.serviceActive)
  const industryActive = useSelector(state => state.filter.industryActive)
  const seniorityActive = useSelector(state => state.filter.seniorityActive)
  const salaryMinMax = useSelector(state => state.filter.salaryMinMax)
  const locationSearch = useSelector(state => state.filter.locationSearch)
  const firmSearch = useSelector(state => state.filter.firmSearch)
  const firmActive = useSelector(state => state.filter.firmActive)

  return (
    <Box
      // className={classes.root}
      sx={{ flexBasis: '30%', pr: 2 }}
    >
      <Typography
        variant='h2'
        color='primary.darkGray'
        sx={{ pb: 2.4 }}
      >
        Filter
      </Typography>

      <Search
        value={filterSearch}
        onChange={(e) => dispatch(setFilterSearch(e.target.value))}
      />

      <FilterCategories
        title='Service' categories={SERVICES_LIST}
        activeCategory={serviceActive}
        setActiveCategory={setServisesActive}
      />

      <FilterCategories
        title='Industry' categories={INDUSTRIES_LIST}
        activeCategory={industryActive}
        setActiveCategory={setIndustriesActive}
        isButton
      />

      <FilterCategories
        title='Seniority level' categories={SENIORITIES_LIST}
        activeCategory={seniorityActive}
        setActiveCategory={setSeniorityActive}
      />

      <Search
        title='Location'
        value={locationSearch}
        onChange={(e) => dispatch(setLocationSearch(e.target.value))}
      />

      <SliderRange
        title='Salary'
        value={salaryMinMax}
        setValue={setSalaryMinMax}
        max={10000}
        step={100}
        isSalary
      />

      <Search
        title='Firm'
        value={firmSearch}
        onChange={(e) => dispatch(setFirmSearch(e.target.value))}
      />

      <FilterCategories
        categories={FIRMS_LIST}
        activeCategory={firmActive}
        setActiveCategory={setFirmActive}
      />
    </Box>
  )
}
