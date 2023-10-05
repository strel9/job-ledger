import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {
  setFilterSearch,
  setServisesActive,
  setIndustriesActive,
  setSeniorityActive,
  setLocationSearch,
  // setFirmSearch,
  setFirmActive,
  setSalaryMinMax
} from 'redux/filter/slice'

import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

import CloseIcon from '@mui/icons-material/Close'

export default function FiltersStack () {
  const dispatch = useDispatch()

  // console.log('offset', offset)
  const filterSearch = useSelector(state => state.filter.filterSearch)
  const serviceActive = useSelector(state => state.filter.serviceActive)
  const industryActive = useSelector(state => state.filter.industryActive)
  const seniorityActive = useSelector(state => state.filter.seniorityActive)
  const locationSearch = useSelector(state => state.filter.locationSearch)
  // const firmSearch = useSelector(state => state.filter.firmSearch)
  const firmActive = useSelector(state => state.filter.firmActive)
  // const salaryMinMax = useSelector(state => state.filter.salaryMinMax)

  const FILTERS = [
    // {
    //   label: 'Filter',
    //   filterGroup: filterSearch,
    //   onDeleteFunc: () => dispatch(setFilterSearch(''))
    // },
    {
      label: 'Service',
      filterGroup: serviceActive,
      onDeleteFunc: () => dispatch(setServisesActive(''))
    },
    {
      label: 'Industry',
      filterGroup: industryActive,
      onDeleteFunc: () => dispatch(setIndustriesActive(''))
    },
    {
      label: 'Seniority',
      filterGroup: seniorityActive,
      onDeleteFunc: () => dispatch(setSeniorityActive(''))
    },
    {
      label: 'Firm',
      filterGroup: firmActive,
      onDeleteFunc: () => dispatch(setFirmActive(''))
    },
    {
      label: 'Location',
      filterGroup: locationSearch,
      onDeleteFunc: () => dispatch(setLocationSearch(''))
    }
  ]
  const renderFilters = (label, filterGroup, onDeleteFunc) => (
    filterGroup && (
      <Chip
        label={`${label}: ${filterGroup}`}
        color='primary' variant='outlined'
        deleteIcon={<CloseIcon />}
        onDelete={() => onDeleteFunc()}
      />)
  )

  const handleDeleteAll = () => {
    dispatch(setServisesActive(''))
    dispatch(setIndustriesActive(''))
    dispatch(setSeniorityActive(''))
    dispatch(setSalaryMinMax(false))
    dispatch(setFirmActive(''))
    dispatch(setLocationSearch(''))
  }

  return (
    <>
      <Stack
        direction='row' spacing={1} useFlexGap flexWrap='wrap'
        sx={{ mb: 2.4 }}
      >
        <Chip
          color='primary' label='Clear all'
          onClick={() => handleDeleteAll()}
          disabled={!(serviceActive || industryActive || seniorityActive || firmActive || locationSearch)}
        />

        {FILTERS.map(({ label, filterGroup, onDeleteFunc }) => (
          renderFilters(label, filterGroup, onDeleteFunc)
        ))}

        {/* {salaryMinMax && (
            <Chip
              label={`Salary: $${salaryMinMax[0]}-$${salaryMinMax[1]}`}
              color='primary' variant='outlined'
              deleteIcon={<CloseIcon />}
              onDelete={() => dispatch(setSalaryMinMax(false))}
              disabled
            />)} */}

      </Stack>
    </>
  )
}
