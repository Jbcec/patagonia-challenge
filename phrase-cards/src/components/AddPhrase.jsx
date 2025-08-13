import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPhrase } from '../app/phrasesSlice'

const MIN_LENGTH = 3
const MAX_LENGTH = 200

const AddPhrase = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const phrases = useSelector(state => state.phrases.phrases)

  const onSubmit = (e) => {
    e.preventDefault()
    const trimmed = value.trim()

    if (trimmed.length < MIN_LENGTH) {
      setError(`La frase debe tener al menos ${MIN_LENGTH} caracteres`)
      return
    }
    if (trimmed.length > MAX_LENGTH) {
      setError(`La frase no puede exceder ${MAX_LENGTH} caracteres`)
      return
    }
    if (phrases.some(p => p.text.toLowerCase() === trimmed.toLowerCase())) {
      setError('La frase ya existe')
      return
    }

    dispatch(addPhrase(trimmed))
    setValue('')
    setError('')
  }

  return (
    <form onSubmit={onSubmit} className="form-add-phrase">
      <input
        aria-label="new-phrase"
        placeholder="Escribe una frase y presiona Enter"
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
      />
      <button type="submit">Agregar</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  )
}

export default AddPhrase
