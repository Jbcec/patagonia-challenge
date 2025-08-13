import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removePhrase } from '../app/phrasesSlice'

const MAX_HEIGHT = 100 // px

const PhraseCard = ({ phrase }) => {
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(false)
  const textRef = useRef(null)
  const [needsTruncate, setNeedsTruncate] = useState(false)

  useEffect(() => {
    if (textRef.current) {
      setNeedsTruncate(textRef.current.scrollHeight > MAX_HEIGHT)
    }
  }, [phrase.text])

  return (
    <div className="phrase-card">
      <p
        ref={textRef}
        style={{
          maxHeight: expanded ? 'none' : MAX_HEIGHT,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          whiteSpace: 'pre-wrap',
        }}
      >
        {phrase.text}
      </p>

      {needsTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#0077ff',
            cursor: 'pointer',
            marginBottom: 8,
            padding: 0,
            textAlign: 'left',
            fontWeight: 'bold',
          }}
        >
          {expanded ? 'Leer menos' : 'Leer más'}
        </button>
      )}

      <button
        onClick={() => dispatch(removePhrase(phrase.id))}
        style={{
          backgroundColor: '#d93025',
          border: 'none',
          color: 'white',
          padding: '8px 16px',
          borderRadius: 6,
          cursor: 'pointer',
          fontSize: 14,
        }}
      >
        Eliminar
      </button>
    </div>
  )
}

export default PhraseCard
