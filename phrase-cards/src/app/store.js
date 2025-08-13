// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import phrasesReducer from './phrasesSlice'

export const store = configureStore({
  reducer: {
    phrases: phrasesReducer
  }
})
