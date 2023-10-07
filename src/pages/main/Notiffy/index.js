import React from 'react'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'

// import useClasses from 'hooks/useClasses'
// import styles from './styles'

export default function Notiffy () {
  // const classes = useClasses(styles)

  const Root = styled('div')(({ theme }) => ({
    background: 'linear-gradient(90deg, rgba(70,193,235,1) 0%, rgba(125,95,236,1) 70%);'
    // `
    // linear-gradient(${'white'}, ${'white'}) padding-box,
    // linear-gradient(${'to right'}, ${'#46C1EB'}, ${'#7967ED'}) border-box
    // `,
  }))

  const FormContainer = styled('div')(({ theme }) => ({

    '& > *:not(last-child)': {
      marginBottom: '16px'
    }
  }))

  const Input = styled(TextField)(({ theme }) => ({
    opacity: '50%',

    '&:MuiFilledInput': {

    }
  }))

  return (
    <Root
      // className={classes.root}
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

        <FormContainer
          // className={classes.formContainer}
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
          <Input
            // className={classes.input}
            fullWidth
            size='small'
            id='outlined-basic' label='Your name' variant='outlined'
          />
          <Input
            // className={classes.input}
            fullWidth
            size='small'
            id='outlined-basic2' label='Your e-mail' variant='outlined'
          />

          <Button
            // className={classes.btn}
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
        </FormContainer>
      </Container>
    </Root>
  )
}
