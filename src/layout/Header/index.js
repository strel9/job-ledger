import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import useScrollTrigger from '@mui/material/useScrollTrigger'

import Container from '@mui/material/Container'
// import Container from 'components/Container'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
// import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// import Button from 'components/Button'

import { NAV_ITEMS, MAIN } from 'constants/links'

import MenuIcon from '@mui/icons-material/Menu'
import Logo from 'icons/Logo'

import useClasses from 'hooks/useClasses'
import styles from './styles'

const drawerWidth = 240

function DrawerAppBar (props) {
  const classes = useClasses(styles)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  })

  const router = useRouter()

  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        padding: 1.2
      }}
    >
      <Link href={MAIN}>
        <Logo />
      </Link>

      <Divider />

      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText component={Link} primary={item.title} href={item.link} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <>
      <AppBar
        component='nav'
        color='secondary'
        sx={{
          boxShadow: 'none',
          bgcolor: trigger ? '#F7F7F7' : 'transparent'
        }}
      >
        {/* <CssBaseline /> */}
        <Container sx={{
        // zIndex: -20
        }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              component={Link}
              href={MAIN}
              sx={{
                display: { xs: 'none', sm: 'block', md: 'flex' }
              }}
            >
              <Logo />
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {NAV_ITEMS.map((item, index) => (
                <Button
                  key={item.title}
                  component={Link}
                  href={item.link}
                  sx={{
                    color: 'primary.black',
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    ...(index < NAV_ITEMS.length - 1 && {
                      mr: 4.2
                    }),
                    ...(router.asPath === item.link && {
                      color: 'primary.blue',
                      fontWeight: 700
                    })
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>

  )
}

export default DrawerAppBar
