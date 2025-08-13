import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PhraseCard from './PhraseCard'
import Pagination from './Pagination'
import { setCurrentPage } from '../app/phrasesSlice'

const PhraseGrid = () => {
  const dispatch = useDispatch()
  const { phrases, filter, currentPage, itemsPerPage } = useSelector(state => state.phrases)

  const filteredPhrases = phrases.filter(p =>
    p.text.toLowerCase().includes(filter.toLowerCase())
  )

  const totalPages = Math.ceil(filteredPhrases.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const visiblePhrases = filteredPhrases.slice(startIndex, startIndex + itemsPerPage)

  useEffect(() => {
    // Si la página actual es mayor al total de páginas, la ajustamos
    if (currentPage > totalPages && totalPages > 0) {
      dispatch(setCurrentPage(totalPages))
    }
    // Si no hay páginas, volvemos a la 1
    if (totalPages === 0 && currentPage !== 1) {
      dispatch(setCurrentPage(1))
    }
  }, [currentPage, totalPages, dispatch])

  if (filteredPhrases.length === 0) {
    return <p className="error-message"> No se encontraron frases</p>
  }

  return (
    <>
      <div className="phrase-grid">
        {visiblePhrases.map(p => (
          <PhraseCard key={p.id} phrase={p} />
        ))}
      </div>
      <Pagination />
    </>
  )
}

export default PhraseGrid
