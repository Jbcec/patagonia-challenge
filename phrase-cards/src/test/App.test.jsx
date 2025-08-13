import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import App from '../App'

describe('App integration', () => {

    it('agrega una frase y la muestra', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        const input = screen.getByLabelText(/new-phrase/i)
        fireEvent.change(input, { target: { value: 'Frase para test' } })
        fireEvent.submit(input)
        expect(screen.getByText('Frase para test')).toBeInTheDocument()
    })

    it('filtra las frases', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        const search = screen.getByLabelText(/search-input/i)
        fireEvent.change(search, { target: { value: 'maestro' } })
        expect(screen.getByText(/práctica hace al maestro/i)).toBeInTheDocument()
    })

    it('elimina una frase', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        )
        const deleteButtons = screen.getAllByText(/eliminar/i)
        fireEvent.click(deleteButtons[0])
        expect(screen.queryByText(/práctica hace al maestro/i)).not.toBeInTheDocument()
    })
})
