import React from 'react'
import Link from 'next/link'

import { FOOTER_LINKS } from 'constants/links'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'

import Logo from 'icons/Logo'
import TwitterIcon from 'icons/TwitterIcon'
import InIcon from 'icons/InIcon'
import EllipseIcon from 'icons/EllipseIcon'

import useClasses from 'hooks/useClasses'
import styles from './styles'

function Footer (props) {
  const classes = useClasses(styles)

  return (
    <>
      <Divider color='primary.purple' />
      <Box
        component='footer'
        className={classes.root}
        sx={{
          py: 7.9,
          backgroundColor: 'primary.bg'
        }}
      >
        <Container>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
          >
            <Box>
              <Box sx={{
                display: { xs: 'none', sm: 'block' }
              }}
              >
                <Logo />
              </Box>

              <Box sx={{
                display: 'flex',
                justifyContent: 'space-around'
              }}
              >
                <Link href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                  <TwitterIcon />
                </Link>

                <Link href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
                  <InIcon />
                </Link>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'end'
              }}
            >
              <Box sx={{
                display: { xs: 'none', sm: 'block' },
                pb: 5
              }}
              >
                {FOOTER_LINKS.map((item, index) => (
                  <React.Fragment key={item + index}>
                    <Button
                      component={Link}
                      href={item.link}
                      sx={{
                        color: 'primary.black',
                        fontSize: 18,
                        fontWeight: 500
                      }}
                    >
                      {item.title}
                    </Button>

                    {index < FOOTER_LINKS.length - 1 &&
                      <EllipseIcon />}
                  </React.Fragment>
                ))}
              </Box>

              <Typography
                sx={{ fontSize: 12 }}
                variant='body1'
                component='div'
              >
                (c) 2023 Talent Ledger. All rights reserved.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>

  )
}

export default Footer
