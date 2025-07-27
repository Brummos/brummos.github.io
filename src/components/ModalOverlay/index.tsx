import React, {CSSProperties, FC, ReactElement, ReactNode} from 'react'

type Props = {
  children: ReactNode
  onClick?: () => Promise<void>
  style?: CSSProperties
}

const ModalOverlay: FC<Props> = (props: Props): ReactElement => {
  const {children, onClick, style} = props

  return (
    <div
      style={{
        ...style,
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.5)', // TODO theme var (tailwind)
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default ModalOverlay
