import React, {CSSProperties, FC, ReactElement, useEffect, useRef, useState} from 'react'
import {useLocale} from 'next-intl'
import {createPopper, Instance} from '@popperjs/core'
import LocaleField from '@/components/LocaleField'
import LocaleMenu from '@/components/LocaleMenu'
import {EventType, SupportedLocale} from '@/types'

type Props = {
  style?: CSSProperties
}

const LocaleSwitcher: FC<Props> = (props: Props): ReactElement => {
  const {style} = props
  const locale = useLocale()
  const [showMenu, setShowMenu] = useState<boolean>(false) // TODO useState with types everywhere
  const menuRef = useRef<HTMLDivElement>(null)
  const localeSwitcherRef = useRef<HTMLDivElement>(null)
  const popperInstanceRef = useRef<Instance | null>(null)

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      localeSwitcherRef.current &&
      !localeSwitcherRef.current.contains(event.target as Node) &&
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false)
    }
  }

  // hides menu on scroll
  // useEffect(() => {
  //   if (!showMenu) {
  //     return
  //   }
  //   const handleScroll = (): void => {
  //     setShowMenu(false)
  //   }
  //   window.addEventListener(EventType.SCROLL, handleScroll, {passive: true})
  //   return (): void => {
  //     window.removeEventListener(EventType.SCROLL, handleScroll)
  //   }
  // }, [showMenu])

  useEffect(() => {
    document.addEventListener(EventType.CLICK, handleClickOutside)
    return (): void => {
      document.removeEventListener(EventType.CLICK, handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (showMenu && localeSwitcherRef.current && menuRef.current) {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy()
      }

      popperInstanceRef.current = createPopper(localeSwitcherRef.current, menuRef.current, {
        placement: 'bottom',
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['top-end', 'bottom-end']
            }
          },
          {
            name: 'offset',
            options: {
              offset: [0, 8]
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
  }, [showMenu])

  const onClick = async (): Promise<void> => {
    setShowMenu(!showMenu)
  }

  return (
    <div
      ref={localeSwitcherRef}
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
        width: 'fit-content'
      }}
      onClick={onClick}
    >
      <LocaleField locale={locale.toLocaleUpperCase() as SupportedLocale} showLocaleCaption={false} />
      {showMenu && (
        <LocaleMenu
          ref={menuRef}
          style={{
            backgroundColor: 'aqua'
          }}
        />
      )}
    </div>
  )
}

export default LocaleSwitcher
