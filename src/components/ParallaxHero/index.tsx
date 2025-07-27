import React, {CSSProperties, FC, ReactElement} from 'react'

type Props = {
  style?: CSSProperties
}

const ParallaxHero: FC<Props> = (props: Props): ReactElement => {
  const {style} = props

  return (
    <div style={{...style, display: 'flex', backgroundColor: 'red', height: 3000}}>
      <div id="parallax" style={{...style, display: 'block', backgroundColor: 'green', width: 1920, position: 'relative'}}>
        <div
          className="parallax"
          id="keyart-0"
          data-speed="2"
          style={{
            height: 300,
            width: 300,
            backgroundColor: 'purple',
            transform: 'translate3d(0px, 0px, 0px)',
            position: 'absolute',
            bottom: 200
          }}
        ></div>
        <div
          className="parallax"
          id="keyart-1"
          data-speed="5"
          style={{
            height: 300,
            width: 300,
            backgroundColor: 'yellow',
            transform: 'translate3d(0px, 0px, 0px)',
            position: 'absolute',
            bottom: 150
          }}
        ></div>
        <div
          className="parallax"
          id="keyart-2"
          data-speed="11"
          style={{
            height: 300,
            width: 300,
            backgroundColor: 'blue',
            transform: 'translate3d(0px, 0px, 0px)',
            position: 'absolute',
            bottom: 100
          }}
        ></div>
        <div
          className="parallax"
          id="keyart-3"
          data-speed="16"
          style={{
            height: 300,
            width: 300,
            backgroundColor: 'brown',
            transform: 'translate3d(0px, 0px, 0px)',
            position: 'absolute',
            bottom: 50
          }}
        ></div>
        <div
          className="parallax"
          id="keyart-4"
          data-speed="26"
          style={{
            height: 300,
            width: 300,
            backgroundColor: 'aqua',
            transform: 'translate3d(0px, 0px, 0px) rotate(45deg)',
            position: 'absolute',
            bottom: -150
          }}
        ></div>
      </div>
    </div>
  )
}

export default ParallaxHero
