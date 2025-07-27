import React, {CSSProperties, FC, ReactElement, useEffect, useRef} from 'react'
import Typewriter from '@/components/Typewriter'
import {EventType} from '@/types'

type Props = {
  style?: CSSProperties
}

const HeaderBanner: FC<Props> = (props: Props): ReactElement => {
  const {style} = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener(EventType.SCROLL, handleScroll, {passive: true})
    return (): void => {
      window.removeEventListener(EventType.SCROLL, handleScroll)
    }
  }, [])

  const handleScroll = (): void => {
    const top = window.pageYOffset
    const speed = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-banner-speed'))
    const xPos = -(top * speed) / 100

    const header = ref.current
    if (!header) {
      return
    }

    const existingTransform = header.style.transform
    const newTranslate = `translate3d(${xPos}px, 0px, 0px)`
    header.style.transform = existingTransform.match(/translate3d\([^)]+\)/)
      ? existingTransform.replace(/translate3d\([^)]+\)/, newTranslate)
      : `${newTranslate} ${existingTransform}`.trim()
  }

  return (
    <div ref={ref} className={`absolute left-[var(--header-banner-left)]`} style={{...style}}>
      <Typewriter
        texts={[
          '< Full-stack developer />',
          'Think more, create less.',
          'Hello world!',
          'Genius, billionaire, playboy, philanthropist...',
          'Have you tried turning it off and on again?'
        ]} //Genius, billionaire, playboy, philanthropist... //Genius, code-slinger extraordinaire, playboy, tech enthusiast...
      />
    </div>
  )
}

export default HeaderBanner
