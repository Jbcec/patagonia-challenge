import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import phrasesReducer from '../app/phrasesSlice'
import PhraseGrid from '../components/PhraseGrid'

const renderWithRedux = (
  component,
  {
    preloadedState,
    store = configureStore({ reducer: { phrases: phrasesReducer }, preloadedState }),
    ...renderOptions
  } = {}
) => {
  return {
    store,
    ...render(<Provider store={store}>{component}</Provider>, renderOptions)
  }
}

describe('PhraseGrid component', () => {
  it('muestra las frases del estado', () => {
    renderWithRedux(<PhraseGrid />, {
      preloadedState: {
        phrases: {
          phrases: [
            { id: 'p1', text: 'Primera frase' },
            { id: 'p2', text: 'Segunda frase' }
          ],
          filter: '',
          currentPage: 1,
          itemsPerPage: 6
        }
      }
    })
    expect(screen.getByText('Primera frase')).toBeInTheDocument()
    expect(screen.getByText('Segunda frase')).toBeInTheDocument()
  })
})
