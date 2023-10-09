import React from 'react'
// import { useSelector } from 'react-redux'

// import { setFilteredArticles } from 'redux/filter/slice'
// import { setArticles, setIsLoading } from 'redux/data/slice'

import { API_URL, ARTICLES_GET } from 'constants/links'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Filter from './Filter'
import Content from './Content'

// import useClasses from 'hooks/useClasses'
// import styles from './styles'

export const getStaticProps = async (context) => {
  return {
    props: {
    }
  }
}

export default function ArticlesPage (props) {
  // const classes = useClasses(styles)

  const [articlesData, setArticlesData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [offset, setOffset] = React.useState(0)
  const [limit, setLimit] = React.useState(10)

  // const filterSearch = useSelector(state => state.filter.filterSearch)
  // const firmActive = useSelector(state => state.filter.firmActive)

  const handleOffset = (value) => {
    setOffset(value)
  }
  const handleLimit = (value) => {
    setLimit(value)
  }

  React.useEffect(() => {
    async function fetchData () {
      const response =
        // await fetch(`${API_URL}${FIRMS_GET}/?offset=${offset}&limit=${limit}`)
        await fetch(`${API_URL}${ARTICLES_GET}`)

      const data = await response.json()

      // setJobsData([...data, ...firm])
      setArticlesData(data)
      setIsLoading(false)
    }
    fetchData()
  }, [offset, limit])

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
      <Container
        sx={{
          display: 'flex'
        }}
      >
        <Filter />

        <Content
          articlesData={articlesData}
          isLoading={isLoading}
          offset={offset}
          limit={limit}
          handleOffset={handleOffset}
          handleLimit={handleLimit}
        />
      </Container>
    </Box>
  )
}
