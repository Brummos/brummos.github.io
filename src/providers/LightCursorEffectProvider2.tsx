'use client'
import React, {ReactElement, ReactNode, useEffect, useRef} from 'react'
import {EventType} from '@/types'

const LightCursorEffectProvider2 = ({children}: {children: ReactNode}): ReactElement => {
  const lightRef = useRef<HTMLDivElement>(null)
  const RADIAL_SCALE = '50%'

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      if (lightRef.current) {
        lightRef.current.style.background = `
          radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
          rgba(255, 255, 255, 0.05) 0px, transparent ${RADIAL_SCALE})
        `
      }
    }
    window.addEventListener(EventType.MOUSE_MOVE, handleMouseMove)
    return (): void => window.removeEventListener(EventType.MOUSE_MOVE, handleMouseMove)
  }, [])

  return (
    <>
      <div ref={lightRef} className="pointer-events-none fixed inset-0 z-200 transition-all duration-75" />
      <div>{children}</div>
    </>
  )
}

export default LightCursorEffectProvider2
