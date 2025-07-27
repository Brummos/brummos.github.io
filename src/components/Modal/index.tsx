import React, {CSSProperties, FC, ReactElement, ReactNode} from 'react'

type Props = {
  children: ReactNode
  style?: CSSProperties
}

const Modal: FC<Props> = (props: Props): ReactElement => {
  const {children, style} = props

  return (
    <div
      style={{
        ...style
        //backgroundColor: '#FBFBFB', // TODO theme var
        //padding: 10,
        //borderRadius: 4,
        //overflow: 'hidden',
      }}
      onClick={(e): void => e.stopPropagation()}
    >
      {children}
    </div>
  )
}

export default Modal
