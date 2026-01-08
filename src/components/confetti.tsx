import React, { useCallback, useEffect, useRef, useState } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { loadEmittersPlugin } from '@tsparticles/plugin-emitters'
import type { Container, Engine } from '@tsparticles/engine'

interface Props {
  trigger: boolean
  onComplete?: () => void
}

const Confetti = ({ trigger, onComplete }: Props): JSX.Element => {
  const [key, setKey] = useState(0)
  const hasTriggeredRef = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const engineRef = useRef<Engine | null>(null)

  // Initialize engine once
  useEffect(() => {
    const initEngine = async (): Promise<void> => {
      if (!engineRef.current) {
        const { tsParticles } = await import('@tsparticles/engine')
        await loadSlim(tsParticles)
        await loadEmittersPlugin(tsParticles)
        engineRef.current = tsParticles
      }
    }
    initEngine().catch(console.error)
  }, [])

  const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    // Container is loaded, no additional action needed
    if (container) {
      console.log('Particles container loaded')
    }
  }, [])

  useEffect(() => {
    // Only trigger once when trigger becomes true
    if (trigger && !hasTriggeredRef.current) {
      console.log('Confetti triggered')
      hasTriggeredRef.current = true
      setKey(prev => prev + 1) // Force re-render with new key
      
      // Call onComplete after animation duration
      timeoutRef.current = setTimeout(() => {
        console.log('Confetti complete')
        hasTriggeredRef.current = false
        onComplete?.()
      }, 3000) // Confetti animation duration
    }

    // Reset when trigger becomes false
    if (!trigger && hasTriggeredRef.current) {
      hasTriggeredRef.current = false
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [trigger, onComplete])

  if (!trigger) return <></>

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999
      }}
    >
      <Particles
        key={key}
        id={`confetti-particles-${key}`}
        particlesLoaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 0
            },
            color: {
              value: ['#FF6B9D', '#C44569', '#FFA07A', '#FFD700', '#FF69B4', '#FF1493', '#FFB6C1', '#FF1493']
            },
            shape: {
              type: 'circle'
            },
            opacity: {
              value: { min: 0.6, max: 1 }
            },
            size: {
              value: { min: 5, max: 10 }
            },
            move: {
              enable: true,
              speed: { min: 3, max: 6 },
              direction: 'bottom',
              straight: false,
              outModes: {
                default: 'out'
              },
              gravity: {
                enable: true,
                acceleration: 0.8
              }
            }
          },
          emitters: [
            {
              position: {
                x: 50,
                y: 0
              },
              rate: {
                quantity: 20,
                delay: 0.1
              },
              life: {
                duration: {
                  sync: true,
                  value: 3
                },
                count: 1
              }
            }
          ],
          background: {
            color: 'transparent'
          }
        }}
      />
    </div>
  )
}

export default Confetti
