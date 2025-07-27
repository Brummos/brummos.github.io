import React, {FC, ReactElement} from 'react'

export type Props = {
  width?: number
  height?: number
}

const ItalyFlag: FC<Props> = (props: Props): ReactElement => {
  const {width = 32, height = 24} = props

  return (
    <div style={{width, height}}>
      <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-it" viewBox="0 0 640 480" width="100%" height="100%">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#fff" d="M0 0h640v480H0z" />
          <path fill="#009246" d="M0 0h213.3v480H0z" />
          <path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
        </g>
      </svg>
    </div>
  )
}

export default ItalyFlag
