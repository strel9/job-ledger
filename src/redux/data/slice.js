import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jobs: [],
  firms: [],
  articles: [],
  isLoading: true
}

export const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload
    },
    setFirms: (state, action) => {
      state.firms = action.payload
    },
    setArticles: (state, action) => {
      state.articles = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const { setJobs, setFirms, setArticles, setIsLoading } = data.actions

export default data.reducer
