import React, {useRef, useEffect, useState} from 'react'
import {createPopper, Instance} from '@popperjs/core'
import LocaleMenu from '@/components/LocaleMenu'

const FlippingPopper = () => {
  // const referenceRef = useRef(null);
  // const popperRef = useRef(null);
  // const [visible, setVisible] = useState(true); // Toggle popper visibility if needed

  const referenceRef = useRef(null)
  const popperRef = useRef(null)
  const popperInstanceRef = useRef<Instance | null>(null)
  const [visible, setVisible] = useState(true)

  // useEffect(() => {
  //   if (referenceRef.current && popperRef.current) {
  //     createPopper(referenceRef.current, popperRef.current, {
  //       placement: 'bottom',
  //       modifiers: [
  //         {
  //           name: 'flip',
  //           options: {
  //             fallbackPlacements: ['top'],
  //           },
  //         },
  //         {
  //           name: 'preventOverflow',
  //           options: {
  //             boundary: 'parentNode',
  //           },
  //         },
  //       ],
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (visible && referenceRef.current && popperRef.current) {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy()
      }

      popperInstanceRef.current = createPopper(referenceRef.current, popperRef.current, {
        placement: 'bottom',
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['top-end', 'bottom-start'] //['top'],
            }
          },
          {
            name: 'offset',
            options: {
              offset: [0, 8] // [skid, distance]
            }
          },
          {
            name: 'preventOverflow',
            options: {
              boundary: 'parent'
            }
          }
        ]
      })
    }

    return (): void => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy()
        popperInstanceRef.current = null
      }
    }
  }, [visible])

  return (
    <>
      <div
        ref={referenceRef}
        onClick={() => setVisible(v => !v)}
        style={{
          width: 100,
          height: 20,
          backgroundColor: '#4e73df',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Box
      </div>

      {visible && (
        // <div
        //     ref={popperRef}
        //     style={{
        //       backgroundColor: '#1cc88a',
        //       color: 'white',
        //       padding: '0.5rem 1rem',
        //       borderRadius: 6,
        //       boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
        //       zIndex: 200,
        //     }}
        // >
        //   Popper
        // </div>
        <LocaleMenu
          ref={popperRef}
          style={{
            backgroundColor: 'aqua'
            //position: 'absolute',
            //top: 30,
            //right: 0

            // top: position === 'below' ? 28 : 'auto',
            // bottom: position === 'above' ? 28 : 'auto'
          }}
        />
      )}
    </>
  )
}

export default FlippingPopper
