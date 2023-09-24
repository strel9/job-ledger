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
  setFirmActive,
  setFilteredJobs
} from 'redux/filter/slice'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import SliderRange from 'components/SliderRange'
import Search from 'components/Search'
import FilterCategories from 'components/FilterCategories'

import useClasses from 'hooks/useClasses'
import styles from './styles'

const SERVICES_LIST = ['Audit', 'Consulting', 'Deals',
  'Economics', 'Forensics', 'Legal',
  'Restructuring', 'Risk', 'Other']

const INDUSTRIES_LIST = ['Consumer', 'Energy & Utilities', 'Financial services',
  'Economics', 'Forensics', 'Legal',
  'Government and health industries', 'Industrial manufacturing and services',
  'Private equity and funds', 'Technology media & telecommunications']

const SENIORITIES_LIST = ['Training', 'Senior', 'Manager',
  'Director', 'Partner']

const FIRMS_LIST = ['Duncan & Toplis ', 'MOORE']

export default function JobsFilter (props) {
  const classes = useClasses(styles)
  // const { } = props

  const dispatch = useDispatch()

  const jobsData = useSelector(state => state.data.jobs)

  const filterSearch = useSelector(state => state.filter.filterSearch)
  const servicesActive = useSelector(state => state.filter.servicesActive)
  const industriesActive = useSelector(state => state.filter.industriesActive)
  const seniorityActive = useSelector(state => state.filter.seniorityActive)
  const salaryMinMax = useSelector(state => state.filter.salaryMinMax)
  const locationSearch = useSelector(state => state.filter.locationSearch)
  const firmSearch = useSelector(state => state.filter.firmSearch)
  const firmActive = useSelector(state => state.filter.firmActive)
  const filteredJobs = useSelector(state => state.filter.filteredJobs)

  dispatch(setFilteredJobs(filteredJobs))

  const applyFilters = () => {
    let updatedList = jobsData

    if (servicesActive) {
      updatedList = updatedList.filter(
        (item) => item.service.toLowerCase() === servicesActive.toLowerCase()
      )
    }

    if (industriesActive) {
      updatedList = updatedList.filter(
        (item) => item.industry.toLowerCase() === industriesActive.toLowerCase()
      )
    }

    if (seniorityActive) {
      updatedList = updatedList.filter(
        (item) => item.seniority.toLowerCase() === seniorityActive.toLowerCase()
      )
    }

    // Search Title
    if (filterSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.job_title.toLowerCase().search(filterSearch.toLowerCase().trim()) !==
          -1
      )
    }

    // Salary Filter
    const min = salaryMinMax[0]
    const max = salaryMinMax[1]

    updatedList = updatedList.filter(
      (item) => parseInt(item.salary) >= min && item.salary <= max
    )

    // Search Location
    if (locationSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.location.toLowerCase().search(locationSearch.toLowerCase().trim()) !==
      -1
      )
    }

    // Search Firm
    if (firmSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.firm_name.toLowerCase().search(firmSearch.toLowerCase().trim()) !==
      -1
      )
    }

    if (firmActive) {
      updatedList = updatedList.filter(
        (item) => item.firm_name.toLowerCase() === firmActive.toLowerCase()
      )
    }

    dispatch(setFilteredJobs(updatedList))
  }

  React.useEffect(() => {
    applyFilters()
  }, [filterSearch, servicesActive, industriesActive, seniorityActive,
    salaryMinMax, locationSearch, firmSearch, firmActive])

  return (
    <Box
      className={classes.root}
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
        activeCategory={servicesActive}
        setActiveCategory={setServisesActive}
      />

      <FilterCategories
        title='Industry' categories={INDUSTRIES_LIST}
        activeCategory={industriesActive}
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
