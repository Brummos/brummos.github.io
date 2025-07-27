import React, {CSSProperties, FC, ReactElement} from 'react'

type Props = {
  style?: CSSProperties
}

const Footer: FC<Props> = (props: Props): ReactElement => {
  const {style} = props

  return (
    <div
      style={{
        ...style,
        height: 300,
        width: '100%',
        backgroundColor: 'yellow',
        position: 'fixed',
        bottom: 0,
        zIndex: -1
      }}
    >
      <div style={{height: 100, width: 100, backgroundColor: 'blue'}} />
    </div>
  )
}

export default Footer
