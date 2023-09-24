import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
  setArticleSearch,
  setArticleActive,
  setFilteredArticles
} from 'redux/filter/slice'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Search from 'components/Search'
import FilterCategories from 'components/FilterCategories'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function ArticlesFilter () {
  const classes = useClasses(styles)

  const dispatch = useDispatch()

  const articlesData = useSelector(state => state.data.articles)

  const articleSearch = useSelector(state => state.filter.articleSearch)
  const articleActive = useSelector(state => state.filter.articleActive)

  const TOPIC_LIST = ['Innovation', 'Resumes & Interviews',
    'Working remotely', 'Networking', 'Professional knowledge']

  const applyFilters = () => {
    let updatedList = articlesData

    // Search Firm
    if (articleSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.name?.toLowerCase().search(articleSearch.toLowerCase().trim()) !==
        -1
      )
    }

    if (articleActive) {
      updatedList = updatedList.filter(
        (item) => item.topic?.toLowerCase() === articleActive.toLowerCase()
      )
    }

    dispatch(setFilteredArticles(updatedList))
  }

  React.useEffect(() => {
    applyFilters()
  }, [articleSearch, articleActive])

  return (
    <Box
      className={classes.root}
      sx={{
        flexBasis: '30%',
        pr: 2
      }}
    >
      <Typography
        variant='h2' color='primary.darkGray'
        sx={{ pb: 2.4 }}
      >
        Filter
      </Typography>

      <Search
        value={articleSearch}
        onChange={(e) => dispatch(setArticleSearch(e.target.value))}
      />

      <FilterCategories
        title='Topic'
        categories={TOPIC_LIST}
        activeCategory={articleActive}
        setActiveCategory={setArticleActive}
        isButton
      />
    </Box>
  )
}
