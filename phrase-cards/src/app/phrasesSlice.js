import { createSlice } from '@reduxjs/toolkit'

const phrasesSlice = createSlice({
  name: 'phrases',
  initialState: {
    phrases: [
      { id: 'p-1', text: 'La práctica hace al maestro' },
      { id: 'p-2', text: 'El enfoque lo es todo' }
    ],
    filter: '',
    currentPage: 1,
    itemsPerPage: 6
  },
  reducers: {
    addPhrase: (state, action) => {
      state.phrases.unshift({
        id: 'p-' + Date.now(),
        text: action.payload
      })
    },
    removePhrase: (state, action) => {
      state.phrases = state.phrases.filter(p => p.id !== action.payload)
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload
    }
  }
})

export const {
  addPhrase,
  removePhrase,
  setFilter,
  setCurrentPage,
  setItemsPerPage
} = phrasesSlice.actions

export default phrasesSlice.reducer
