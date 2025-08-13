import phrasesReducer, { addPhrase, removePhrase, setFilter } from '../app/phrasesSlice'

describe('phrasesSlice reducer', () => {
  const initialState = {
    phrases: [
      { id: 'p-1', text: 'Frase uno' },
      { id: 'p-2', text: 'Frase dos' }
    ],
    filter: ''
  }

  it('debe devolver el estado inicial', () => {
    expect(phrasesReducer(undefined, { type: undefined })).toEqual({
      phrases: expect.any(Array),
      filter: '',
      currentPage: 1,
      itemsPerPage: 6
    })
  })

  it('debe agregar una frase', () => {
    const action = addPhrase('Nueva frase test')
    const state = phrasesReducer(initialState, action)
    expect(state.phrases.length).toBe(3)
    expect(state.phrases[0].text).toBe('Nueva frase test')
  })

  it('debe eliminar una frase', () => {
    const action = removePhrase('p-1')
    const state = phrasesReducer(initialState, action)
    expect(state.phrases.length).toBe(1)
    expect(state.phrases.find(p => p.id === 'p-1')).toBeUndefined()
  })

  it('debe cambiar el filtro', () => {
    const action = setFilter('buscar')
    const state = phrasesReducer(initialState, action)
    expect(state.filter).toBe('buscar')
  })
})
