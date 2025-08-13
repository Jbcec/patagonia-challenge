import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import AddPhrase from '../components/AddPhrase'

describe('AddPhrase component', () => {
  it('muestra error si frase es muy corta', () => {
    render(
      <Provider store={store}>
        <AddPhrase />
      </Provider>
    )
    const input = screen.getByLabelText(/new-phrase/i)
    fireEvent.change(input, { target: { value: 'a' } })
    fireEvent.submit(input)
    expect(screen.getByText(/debe tener al menos 3 caracteres/i)).toBeInTheDocument()
  })

  it('muestra error si frase ya existe', () => {
    render(
      <Provider store={store}>
        <AddPhrase />
      </Provider>
    )
    const input = screen.getByLabelText(/new-phrase/i)
    // Frase válida
    fireEvent.change(input, { target: { value: 'Frase duplicada' } })
    fireEvent.submit(input)
    // Misma frase de nuevo
    fireEvent.change(input, { target: { value: 'Frase duplicada' } })
    fireEvent.submit(input)
    expect(screen.getByText(/frase ya existe/i)).toBeInTheDocument()
  })

  it('agrega frase válida y limpia error', () => {
    render(
      <Provider store={store}>
        <AddPhrase />
      </Provider>
    )
    const input = screen.getByLabelText(/new-phrase/i)
    fireEvent.change(input, { target: { value: 'Frase nueva válida' } })
    fireEvent.submit(input)
    expect(screen.queryByText(/error/i)).not.toBeInTheDocument()
    expect(input.value).toBe('')
  })
})
