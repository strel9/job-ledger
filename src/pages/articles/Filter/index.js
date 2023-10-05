import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {
  setArticleSearch,
  setArticleActive
} from 'redux/filter/slice'

import { TOPIC_LIST } from 'constants/filters'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Search from 'components/Search'
import FilterCategories from 'components/FilterCategories'

import useClasses from 'hooks/useClasses'
import styles from './styles'

export default function ArticlesFilter () {
  const classes = useClasses(styles)

  const dispatch = useDispatch()

  const articleSearch = useSelector(state => state.filter.articleSearch)
  const articleActive = useSelector(state => state.filter.articleActive)

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
