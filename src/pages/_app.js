import Head from 'next/head'
// import Script from 'next/script'
import GoogleAnalytics from 'components/GoogleAnalytics'

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
          <Head>
            <title>JobLedger title</title>
            <meta name='description' content='JobLedger description' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' href='/favicon.ico' />
            <GoogleAnalytics />
          </Head>

          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}
