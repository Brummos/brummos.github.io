'use client'
import React, {CSSProperties, FC, ReactElement} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import StickyDropdown from '@/components/StickyBox'

type Props = {
  style?: CSSProperties
}

const MenuBar: FC<Props> = (props: Props): ReactElement => {
  const {style} = props
  const {scrollY} = useScroll()

  //const opacity = useTransform(scrollY, [0, 250], [0, 1]);
  const backgroundColor = useTransform(scrollY, [0, 250], ['#262D37', '#800080'])

  return (
    <motion.div
      style={{
        ...style,
        // TODO flex?
        //  opacity,
        backgroundColor,
        height: 50,
        width: '100%', // TODO flex
        position: 'sticky',
        top: 0,
        zIndex: 20, // TODO we need this?
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      {/*<StickyDropdown/>*/}
      {/*<LocaleSwitcher />*/}
      <LocaleSwitcher style={{marginLeft: 'auto', marginRight: 20}} />
      {/*<div*/}
      {/*  style={{*/}
      {/*    //display: 'flex',*/}
      {/*    //opacity,*/}
      {/*    height: 50,*/}
      {/*    width: '100%' // TODO flex*/}
      {/*    //backgroundColor: 'red',*/}
      {/*    //position: 'sticky',*/}
      {/*    //top: 0,*/}
      {/*    //zIndex: 20 // TODO we need this?*/}
      {/*  }}*/}
      {/*/>*/}
    </motion.div>
  )
}

export default MenuBar
