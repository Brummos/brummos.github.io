import React, {CSSProperties, FC, ReactElement} from 'react'
import {motion} from 'framer-motion'
import {ArrowRight} from 'lucide-react'

type Props = {
  caption: string
  onClick?: () => Promise<void>
  showIcon?: boolean
  style?: CSSProperties
}

const PrimaryButton: FC<Props> = (props: Props): ReactElement => {
  const {caption, onClick, showIcon = true, style} = props
  const ICON_SIZE = 16
  const ANIMATION_DURATION = 0.2

  return (
    <motion.div
      style={{
        width: 'fit-content',
        ...style,
        height: 44,
        display: 'flex',
        backgroundColor: '#BCFF83', //'#4041cb',
        borderRadius: 8,
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        padding: `6px 24px 6px ${showIcon ? '6px' : '24px'}`,
        gap: 8,
        justifyContent: 'center',
        userSelect: 'none'
      }}
      variants={{
        initial: {},
        hover: {}
      }}
      initial="initial"
      whileHover="hover"
      onClick={onClick}
    >
      {showIcon && (
        <div
          style={{
            height: 32,
            width: 32,
            backgroundColor: 'black',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <motion.svg
            width={ICON_SIZE}
            height={ICON_SIZE}
            viewBox={`0 0 ${ICON_SIZE} ${ICON_SIZE}`}
            variants={{
              initial: {rotate: 0},
              hover: {rotate: -45}
            }}
            transition={{duration: ANIMATION_DURATION}}
          >
            <ArrowRight size={ICON_SIZE} color={'#FBFBFB'} />
          </motion.svg>
        </div>
      )}
      <p style={{color: '#303030', fontWeight: '500'}}>{caption}</p>
    </motion.div>
  )
}
// #303030 #FBFBFB
export default PrimaryButton
