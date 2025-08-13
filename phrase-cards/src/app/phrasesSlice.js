import { createSlice } from '@reduxjs/toolkit'

const phrasesSlice = createSlice({
  name: 'phrases',
  initialState: {
    phrases: [
      { id: 'p-1', text: 'Si de algo soy rico es de perplejidades, y no de certezas' },
      { id: 'p-2', text: 'Lástima no se le tiene a nadie, maestro' },
      { id: 'p-3', text: 'Si no hay amor, nunca habrá sueños' },
      { id: 'p-4', text: '¿Acaso existe algo más valioso que tus sueños?' },
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
