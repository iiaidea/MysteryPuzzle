'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Puzzle } from '../types'

interface PuzzleComponentProps {
  puzzle: Puzzle
  onCorrectAnswer: () => void
  isLastPuzzle: boolean
}

export function PuzzleComponent({ puzzle, onCorrectAnswer, isLastPuzzle }: PuzzleComponentProps) {
  const [answer, setAnswer] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (answer.toLowerCase() === puzzle.answer.toLowerCase()) {
      setIsCorrect(true)
      onCorrectAnswer()
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }

  return (
    <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-green-400">{puzzle.title}</h2>
      <p className="mb-4 text-gray-300">{puzzle.description}</p>
      <pre className="bg-gray-700 p-4 rounded mb-4 overflow-x-auto text-green-300 font-mono">
        {puzzle.ciphertext}
      </pre>
      {!isCorrect && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer"
            className="bg-gray-700 text-white"
          />
          <div className="flex justify-between">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="outline" onClick={() => setShowHint(!showHint)}>
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </Button>
          </div>
        </form>
      )}
      {showHint && (
        <Alert className="mt-4 bg-gray-700 border-green-500">
          <AlertTitle>Hint</AlertTitle>
          <AlertDescription>{puzzle.hint}</AlertDescription>
        </Alert>
      )}
      {showError && (
        <Alert className="mt-4 bg-red-900 border-red-500">
          <AlertTitle>Incorrect</AlertTitle>
          <AlertDescription>Try again!</AlertDescription>
        </Alert>
      )}
      {isCorrect && (
        <Alert className="mt-4 bg-green-900 border-green-500">
          <AlertTitle>Correct!</AlertTitle>
          <AlertDescription>
            {isLastPuzzle
              ? "Congratulations! You've solved all the puzzles!"
              : `Great job! The next clue is at: ${puzzle.nextLocation}`}
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}

