import React from 'react'

import { API_URL, ARTICLE_DETAILS_GET, ARTICLES_GET, JOBS_GET } from 'constants/links'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Jobs from './Jobs'
import Content from './Content'

// import useClasses from 'hooks/useClasses'
// import styles from './styles'
import ArticlesBlock from './Articles'

export const getServerSideProps = async (context) => {
  const { id } = context.params

  const responseArticle = await fetch(`${API_URL}${ARTICLE_DETAILS_GET}/${id}`)
  const articleData = await responseArticle.json()

  const responseArticles = await fetch(`${API_URL}${ARTICLES_GET}`)
  const articlesData = await responseArticles.json()

  const responseJobs = await fetch(`${API_URL}${JOBS_GET}`)
  const jobsData = await responseJobs.json()

  return {
    props: {
      article: articleData,
      articles: articlesData,
      jobs: jobsData.jobs
    }
  }
}

export default function ArticleDetails (props) {
  // const classes = useClasses(styles)
  const { article, articles, jobs } = props

  return (
    <Box
      // className={classes.root}
      component='div'
      sx={{
        pt: 14.8,
        pb: 10,
        bgcolor: 'primary.bg'
      }}
    >
      <Container>
        <Box sx={{
          display: 'flex'
        }}
        >
          <Content {...article} />

          <Jobs data={jobs} />
        </Box>

        <ArticlesBlock articles={articles} />
      </Container>
    </Box>
  )
}
