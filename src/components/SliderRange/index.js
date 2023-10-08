import React from 'react'

import { useDispatch } from 'react-redux'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Unstable_Grid2'

// import useClasses from 'hooks/useClasses'
// import styles from './styles'

export default function SliderRange (props) {
  const { title, isSalary, value, setValue, max, step } = props

  // const classes = useClasses(styles)

  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    dispatch(setValue(newValue))
  }

  const handleChangeInputMin = (event, newValue) => {
    const newVal = event.target.value
    const oldVal = value[1]
    dispatch(setValue([newVal, oldVal]))
  }

  const handleChangeInputMax = (event, newValue) => {
    const newVal = event.target.value
    const oldVal = value[0]
    dispatch(setValue([oldVal, newVal]))
  }

  return (
    <div>
      <Typography
        variant='h4' color='primary.darkGray'
        sx={{ mt: 2.4, mb: 1.6 }}
      >
        {title}
      </Typography>

      <Slider
        value={value}
        onChange={handleChange}
        // valueLabelDisplay='auto'
        max={max}
        step={step}
      />

      <Grid
        container
        alignItems='center'
        justify='space-around'
        columns={{ xs: 4, sm: 8, md: 13 }}
        sx={{ mt: 1.6 }}
      >
        <Grid md={6} style={{ textAlign: 'right' }}>

          <TextField
            // className={classes.texfield}
            label={`Min ${title}`}
            // focused
            value={value[0]}
            size='small'
            type='number'
            onChange={evt => handleChangeInputMin(evt)}
            sx={{

            }}
            InputLabelProps={{
              sx: {
                // color: '#4780ED',
                backgroundColor: '#F7F7F7'
              }
            }}
            InputProps={{
              sx: {
                borderStyle: 'solid',
                borderWidth: 1,
                borderRadius: 1,
                borderColor: '#4780ED'
              },
              startAdornment:
              isSalary
                ? (<InputAdornment position='start'>$</InputAdornment>)
                : (<></>)
            }}
          />
        </Grid>

        <Grid xs={1} style={{ textAlign: 'center' }} />

        <Grid md={6} style={{ textAlign: 'left' }}>
          <TextField
            // className={classes.texfield}
            label={`Max ${title}`}
            // focused
            value={value[1]}
            size='small'
            type='number'
            onChange={evt => handleChangeInputMax(evt)}
            sx={{

            }}
            InputLabelProps={{
              sx: {
              // color: '#4780ED',
                backgroundColor: '#F7F7F7'
              }
            }}
            InputProps={{
              sx: {
                borderStyle: 'solid',
                borderWidth: 1,
                borderRadius: 1,
                borderColor: '#4780ED'
              },
              startAdornment:
              isSalary
                ? (<InputAdornment position='start'>$</InputAdornment>)
                : (<></>)
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
}
