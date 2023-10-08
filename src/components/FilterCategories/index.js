
import React from 'react'

import { useDispatch } from 'react-redux'

import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material//Button'

export default function FilterCategories (props) {
  const { title, categories, activeCategory, setActiveCategory } = props

  const [isOpenMoreCategory, setIsOpenMoreCategory] = React.useState(6)

  // const classes = useClasses(styles)
  const dispatch = useDispatch()

  const addCategory = (item) => {
    dispatch(setActiveCategory(item))
  }

  const removeCategory = () => {
    dispatch(setActiveCategory(''))
  }

  return (
    <Box>
      {title && (
        <Typography
          variant='h4'
          color='primary.darkGray'
          sx={{ mt: 2.4 }}
        >
          {title}
        </Typography>)}

      <Stack
        direction='row' spacing={1} useFlexGap flexWrap='wrap'
        sx={{ mt: 1.6, mb: 0.6 }}
      >
        {categories.map((item, index) => index < isOpenMoreCategory && (
          <Chip
            key={item + index}
            label={item}
            color={activeCategory === item ? 'secondary' : 'primary'}
              // color='primary'
            variant='outlined'
            onClick={() => (activeCategory === item
              ? removeCategory(item)
              : addCategory(item))}
          />
        ))}
      </Stack>

      {(categories.length > isOpenMoreCategory) && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant='text'
            onClick={() => setIsOpenMoreCategory(100)}
            sx={{ fontWeight: '400' }}
          >
            See all {title || 'firms'} +
          </Button>
        </Box>
      )}
    </Box>
  )
}
