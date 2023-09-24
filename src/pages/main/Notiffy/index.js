import React from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from 'components/Button'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function Notiffy () {
  const classes = useClasses(styles)

  return (
    <Box
      className={classes.root}
      sx={{
        pt: '98px',
        pb: '98px'
        // display: 'flex',
        // justifyContent: 'space-between'
      }}
    >
      <Container
        maxWidth='951px'
        fixed
        sx={{
          display: 'flex'
        }}
      >
        <Box
          sx={{
            flexBasis: '50%',
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '48px',
              width: '390px',
              ml: '100px',
              lineHeight: '58px'
            }}
            color='primary.white'

            // className={classes.title}
          >
            Be THE FIRST to know about NEW OPENING
          </Typography>
        </Box>

        <Box
          className={classes.formContainer}
          component='form'
          sx={{
            flexBasis: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            maxWidth: '412px',
            pl: '100px'
          }}
        >
          <TextField
            className={classes.input}
            fullWidth
            size='small'
            id='outlined-basic' label='Your name' variant='outlined'
          />
          <TextField
            fullWidth
            className={classes.input}
            size='small'
            id='outlined-basic2' label='Your e-mail' variant='outlined'
          />

          <Button
            className={classes.btn}
            variant='outlined'
            size='large'
            sx={{
              backgroundColor: 'primary.white',
              borderRadius: '80px',
              maxWidth: '207px'
            }}
          >
            Notiffy me
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
