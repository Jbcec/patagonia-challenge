import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../app/phrasesSlice'

const SearchBar = () => {
  const filter = useSelector(state => state.phrases.filter)
  const dispatch = useDispatch()

  return (
    <input
      aria-label="search-input"
      placeholder="Buscar dentro de las frases..."
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
      className="search-bar"
      type="text"
    />
  )
}

export default SearchBar
