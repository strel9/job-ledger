import { configureStore } from '@reduxjs/toolkit'
import filter from 'redux/filter/slice'
import data from 'redux/data/slice'

export const store = configureStore({
  reducer: {
    filter,
    data
  }
})
