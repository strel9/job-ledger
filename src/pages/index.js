import React from 'react'
// import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { setJobs, setFirms, setArticles, setIsLoading } from 'redux/data/slice'

import { API_URL } from 'constants/api'
import { JOBS_GET, FIRMS_GET, ARTICLES_GET } from 'constants/links'

import Hero from 'pages/main/HeroSection'
import JobsActivePositions from 'pages/main/JobsActivePositionsSection'
// import Notiffy from 'pages/main/NotiffySection'
import FirmsPopular from 'pages/main/FirmsPopularSection'
import ArticlesInsights from 'pages/main/ArticlesInsightsSection'
import Box from '@mui/material/Box'

// import BackgroundGlow from 'icons/BackgroundGlow'

// import useClasses from 'hooks/useClasses'
// import styles from './styles'

export default function Main (props) {
  // const { Component, pageProps } = props
  const dispatch = useDispatch()

  React.useEffect(() => {
    fetch(`${API_URL}${JOBS_GET}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        dispatch(setIsLoading(false))
        dispatch(setJobs(arr))
      })
  }, [])

  React.useEffect(() => {
    fetch(`${API_URL}${FIRMS_GET}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        dispatch(setIsLoading(false))
        dispatch(setFirms(arr))
      })
  }, [])

  React.useEffect(() => {
    fetch(`${API_URL}${ARTICLES_GET}`)
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        dispatch(setIsLoading(false))
        dispatch(setArticles(arr))
      })
  }, [])

  const jobs = useSelector(state => state.data.jobs)
  const firms = useSelector(state => state.data.firms)
  const articles = useSelector(state => state.data.articles)

  return (
    <Box sx={{
      position: 'relative',
      // zIndex: -10,
      bgcolor: 'primary.bg'
    }}
    >
      {/* <Box
        sx={{
          // zIndex: -20,
          position: 'absolute'
          // objectFit: 'contain'
        }}
      >

        <BackgroundGlow layout='fill' alt='background' />
      </Box> */}

      <Hero jobsQuontity={jobs.length} />
      <JobsActivePositions data={jobs} />
      {/* <Notiffy /> */}
      <FirmsPopular data={firms} />
      <ArticlesInsights data={articles} />
    </Box>
  )
}
