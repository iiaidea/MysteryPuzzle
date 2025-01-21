'use client'

import { useState } from 'react'
import { PuzzleComponent } from './components/PuzzleComponent'
import { puzzles } from './puzzles'

export default function Home() {
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0)

  const handleCorrectAnswer = () => {
    if (currentPuzzleIndex < puzzles.length - 1) {
      setCurrentPuzzleIndex(currentPuzzleIndex + 1)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-green-500">解読せよ！IT好きのための暗号ミッション</h1>
      <PuzzleComponent 
        puzzle={puzzles[currentPuzzleIndex]} 
        onCorrectAnswer={handleCorrectAnswer}
        isLastPuzzle={currentPuzzleIndex === puzzles.length - 1}
      />
    </main>
  )
}

