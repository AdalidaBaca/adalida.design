import React, { useEffect, useState } from 'react'

const TypewriterText = ({ text }: { text: string }): React.ReactElement => {
  const [lettersRevealed, setLettersRevealed] = useState(0)

  useEffect(() => {
    if (lettersRevealed < text.length) {
      const currentChar = text[lettersRevealed]
      const isNewline = currentChar === '\n'
      
      // If we hit a newline, wait longer before continuing (wait for full word to complete)
      const delay = isNewline ? 800 : 100
      
      const timeout = setTimeout(
        () => { setLettersRevealed(lettersAlreadyShown => lettersAlreadyShown + 1) },
        delay
      )
      return () => { clearTimeout(timeout) }
    }
  }, [lettersRevealed, text.length])

  const displayText = text.slice(0, lettersRevealed)
  const parts = displayText.split('\n')
  
  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  )
}

export default TypewriterText
