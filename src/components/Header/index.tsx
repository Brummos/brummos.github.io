'use client'
import React, {CSSProperties, FC, ReactElement} from 'react'
import ParallaxHero from '@/components/ParallaxHero'
import HeaderBanner from '@/components/HeaderBanner'
import useParallaxScroll from '@/hooks/useParallaxScroll'
import StickyDropdown from '@/components/StickyBox'

type Props = {
  style?: CSSProperties
}

const Header: FC<Props> = (props: Props): ReactElement => {
  const {style} = props
  useParallaxScroll()

  return (
    <div
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 50px)',
        width: '100%',
        backgroundColor: '#262D37',
        position: 'relative'
        //zIndex: 30 // 2 original // TODO disabling for popper (lang switch)
      }}
    >
      {/*<ParallaxHero/>*/}
      <HeaderBanner />
    </div>
  )
}

export default Header
