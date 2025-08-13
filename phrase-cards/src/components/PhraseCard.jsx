import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removePhrase } from '../app/phrasesSlice'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const MAX_HEIGHT = 100 // px

const PhraseCard = ({ phrase }) => {
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const textRef = useRef(null)
  const [needsTruncate, setNeedsTruncate] = useState(false)

  useEffect(() => {
    if (textRef.current) {
      setNeedsTruncate(textRef.current.scrollHeight > MAX_HEIGHT)
    }
  }, [phrase.text])

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText ?
  // }

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

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
        {/* <button
          onClick={copyToClipboard}
          className='copy-text'
        >
          <ContentCopyIcon />
        </button> */}

        <button
          onClick={() => dispatch(removePhrase(phrase.id))}
          className='delete-card'
        >
          Eliminar
        </button>
      </div>

      {toastVisible && (
        <div className="toast">
          Texto copiado ✅
        </div>
      )}
    </div>
  )
}

export default PhraseCard
