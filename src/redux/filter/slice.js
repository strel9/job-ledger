import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filteredJobs: [],
  filteredFirms: [],
  filteredArticles: [],
  filterSearch: '',
  servicesActive: '',
  industriesActive: '',
  seniorityActive: '',
  salaryMinMax: [1, 10000],
  locationSearch: '',
  firmSearch: '',
  firmActive: '',
  firmRankMinMax: [10, 90],
  articleSearch: '',
  articleActive: ''
}

export const filter = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilteredJobs: (state, action) => {
      state.filteredJobs = action.payload
    },
    setFilteredFirms: (state, action) => {
      state.filteredFirms = action.payload
    },
    setFilteredArticles: (state, action) => {
      state.filteredArticles = action.payload
    },
    setFilterSearch: (state, action) => {
      state.filterSearch = action.payload
    },
    setServisesActive: (state, action) => {
      state.servicesActive = action.payload
    },
    setIndustriesActive: (state, action) => {
      state.industriesActive = action.payload
    },
    setSeniorityActive: (state, action) => {
      state.seniorityActive = action.payload
    },
    setSalaryMinMax: (state, action) => {
      state.salaryMinMax = action.payload
    },
    setLocationSearch: (state, action) => {
      state.locationSearch = action.payload
    },
    setFirmSearch: (state, action) => {
      state.firmSearch = action.payload
    },
    setFirmActive: (state, action) => {
      state.firmActive = action.payload
    },
    setFirmRankMinMax: (state, action) => {
      state.firmRankMinMax = action.payload
    },
    setArticleSearch: (state, action) => {
      state.articleSearch = action.payload
    },
    setArticleActive: (state, action) => {
      state.articleActive = action.payload
    }
  }
})

export const {
  setFilterSearch, setFilteredFirms, setFilteredArticles, setServisesActive,
  setIndustriesActive, setSeniorityActive, setSalaryMinMax,
  setLocationSearch, setFirmSearch, setFirmActive, setFirmRankMinMax, setFilteredJobs,
  setArticleSearch, setArticleActive
} = filter.actions

export default filter.reducer
