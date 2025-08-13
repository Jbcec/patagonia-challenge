import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../app/phrasesSlice'

const Pagination = () => {
  const dispatch = useDispatch()
  const { phrases, currentPage, itemsPerPage, filter } = useSelector(state => state.phrases)

  // Filtrado aplicado antes de calcular las páginas
  const filteredPhrases = phrases.filter(p =>
    p.text.toLowerCase().includes(filter.toLowerCase())
  )

  const totalPages = Math.ceil(filteredPhrases.length / itemsPerPage)

  if (totalPages <= 1) return null // Ocultar si solo hay una página

  const changePage = (page) => {
    dispatch(setCurrentPage(page))
  }

  return (
    <div className="pagination">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Anterior
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={currentPage === i + 1 ? 'active' : ''}
          onClick={() => changePage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente →
      </button>
    </div>
  )
}

export default Pagination
