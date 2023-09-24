import { ThemeProvider } from '@mui/material/styles'
import Layout from 'layout'
import theme from 'constants/theme'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

// import CssBaseline from '@mui/material/CssBaseline'
// import { CacheProvider } from '@emotion/react'

// import useClasses from 'hooks/useClasses'
// import styles from './styles'
// import createEmotionCache from '../src/createEmotionCache'
import '../../styles/globals.css'

export default function App (props) {
  const { Component, pageProps } = props

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}
