import React from 'react'
import { styled } from '@mui/material/styles'

import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'

import LensIcon from 'icons/LensIcon'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  // minWidth: '100%',
  // width: '100%',
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25)
  // },
  marginLeft: 0,
  padding: 0,
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  top: 0
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  minWidth: '100%',
  // width: '100%',
  '& .MuiInputBase-input': {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#4780ED',
    borderRadius: 8,

    padding: theme.spacing(0.3, 1.2),
    // vertical padding + font size from searchIcon
    paddingLeft: 16,
    transition: theme.transitions.create('width'),
    // minWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      // width: '12ch',
      '&:focus': {
        // width: '20ch'
      }
    }
  }
}))

export default function index (props) {
  const { title, value, onChange } = props
  return (

    <>
      {title && (
        <Typography
          variant='h4' color='primary.darkGray'
          sx={{ my: [2.4, 1.6] }}
        >
          {title}
        </Typography>
      )}

      <Search>
        <StyledInputBase
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
          value={value}
          onChange={onChange}
          name={`search ${title}`}
        />

        <SearchIconWrapper>
          <LensIcon />
        </SearchIconWrapper>
      </Search>
    </>
  )
}
