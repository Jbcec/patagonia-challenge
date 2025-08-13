import React from 'react'
import { useSelector } from 'react-redux'
import AddPhrase from './components/AddPhrase'
import SearchBar from './components/SearchBar'
import PhraseGrid from './components/PhraseGrid'
import './index.css' 

export default function App() {
  const { phrases, filter } = useSelector(state => state.phrases)

  const filteredPhrases = phrases.filter(p =>
    p.text.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="app-container">
      <h1>Phrase Cards</h1>
      <AddPhrase />
      <SearchBar />
      <PhraseGrid phrases={filteredPhrases} />
    </div>
  )
}
