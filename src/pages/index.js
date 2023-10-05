import React from 'react'
// import Image from 'next/image'
// import { useSelector, useDispatch } from 'react-redux'
// import { setJobs, setFirms, setArticles, setIsLoading } from 'redux/data/slice'

import { API_URL, JOBS_GET, FIRMS_GET, ARTICLES_GET } from 'constants/links'

import Hero from 'pages/main/HeroSection'
import JobsActivePositions from 'pages/main/JobsActivePositionsSection'
// import Notiffy from 'pages/main/NotiffySection'
import FirmsPopular from 'pages/main/FirmsPopularSection'
import ArticlesInsights from 'pages/main/ArticlesInsightsSection'
import Box from '@mui/material/Box'

// import BackgroundGlow from 'icons/BackgroundGlow'

// import useClasses from 'hooks/useClasses'
// import styles from './styles'

export const getStaticProps = async (context) => {
  const responseJobs = await fetch(`${API_URL}${JOBS_GET}`)
  const jobsData = await responseJobs.json()

  const responseFirms = await fetch(`${API_URL}${FIRMS_GET}`)
  const firms = await responseFirms.json()

  const responseArticles = await fetch(`${API_URL}${ARTICLES_GET}`)
  const articles = await responseArticles.json()
  const isLoading = true

  return {
    props: {
      jobs: jobsData.jobs,
      jobsCount: jobsData.job_count,
      firms,
      articles,
      isLoading
    }
  }
}

export default function Main (props) {
  const { jobs, jobsCount, firms, articles, isLoading } = props

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

      <Hero jobsCount={jobsCount} />
      <JobsActivePositions data={jobs} jobsCount={jobsCount} isLoading={isLoading} />
      {/* <Notiffy /> */}
      <FirmsPopular data={firms} />
      <ArticlesInsights data={articles} />
    </Box>
  )
}
