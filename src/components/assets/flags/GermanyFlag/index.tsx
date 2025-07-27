import React, {FC, ReactElement} from 'react'

export type Props = {
  width?: number
  height?: number
}

const GermanyFlag: FC<Props> = (props: Props): ReactElement => {
  const {width = 32, height = 24} = props

  return (
    <div style={{width, height}}>
      <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-de" viewBox="0 0 640 480" width="100%" height="100%">
        <path fill="#fc0" d="M0 320h640v160H0z" />
        <path fill="#000001" d="M0 0h640v160H0z" />
        <path fill="red" d="M0 160h640v160H0z" />
      </svg>
    </div>
  )
}

export default GermanyFlag
