'use client'
import React, {ReactElement, useEffect, useState} from 'react'
import {EventType} from '@/types'

const LightCursorEffectProvider = ({children}: {children: React.ReactNode}): ReactElement => {
  const [position, setPosition] = useState({x: 0, y: 0})
  const RADIAL_SCALE = '50%'

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      setPosition({x: event.clientX, y: event.clientY})
    }
    window.addEventListener(EventType.MOUSE_MOVE, handleMouseMove)
    return (): void => window.removeEventListener(EventType.MOUSE_MOVE, handleMouseMove)
  }, [])

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-200 transition-all duration-200"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.05) 0px, transparent ${RADIAL_SCALE})`
        }}
      />
      <div>{children}</div>
    </>
  )
}

export default LightCursorEffectProvider
