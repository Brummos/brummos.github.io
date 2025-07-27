import {useEffect} from 'react'
import {EventType} from '@/types'

const useParallaxScroll = (): void => {
  const CLASS_NAME = 'parallax'
  const ATTRIBUTE_NAME = 'data-speed'

  useEffect(() => {
    window.addEventListener(EventType.SCROLL, handleScroll, {passive: true})
    return (): void => {
      window.removeEventListener(EventType.SCROLL, handleScroll)
    }
  }, [])

  const handleScroll = (): void => {
    const top = window.pageYOffset
    const layers = document.getElementsByClassName(CLASS_NAME)

    Array.from(layers).forEach((layerElement): void => {
      const layer = layerElement as HTMLElement
      const speedAttribute = layer.getAttribute(ATTRIBUTE_NAME)

      if (!speedAttribute) return

      const speed = parseFloat(speedAttribute)
      const yPos = -(top * speed) / 100

      const existingTransform = layer.style.transform
      const newTranslate = `translate3d(0px, ${yPos}px, 0px)`

      layer.style.transform = existingTransform.match(/translate3d\([^)]+\)/)
        ? existingTransform.replace(/translate3d\([^)]+\)/, newTranslate)
        : `${newTranslate} ${existingTransform}`.trim()
    })

    // const headers = document.getElementsByClassName('parallax-header');
    // Array.from(headers).forEach((headerElement): void => {
    //   const header = headerElement as HTMLElement;
    //   const speedAttribute = header.getAttribute(ATTRIBUTE_NAME);
    //
    //   if (!speedAttribute) return;
    //
    //   const speed = parseFloat(speedAttribute);
    //   const xPos = -(top * speed) / 100;
    //
    //   const existingTransform = header.style.transform;
    //   const newTranslate = `translate3d(${xPos}px, 0px, 0px)`;
    //
    //   header.style.transform = existingTransform.match(/translate3d\([^)]+\)/)
    //       ? existingTransform.replace(/translate3d\([^)]+\)/, newTranslate)
    //       : `${newTranslate} ${existingTransform}`.trim();
    // });
  }
}

export default useParallaxScroll
