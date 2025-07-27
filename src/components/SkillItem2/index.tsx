import React, {CSSProperties, FC, ReactElement} from 'react'
import Image from 'next/image'

type Props = {
  caption: string
  src: string
  style?: CSSProperties
}

const SkillItem2: FC<Props> = (props: Props): ReactElement => {
  const {caption, src, style} = props

  return (
    <div style={{...style, display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', gap: 8}}>
      <div style={{width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{borderRadius: 4}}
          src={src}
          width={38}
          height={38}
          alt="Picture of the author" // TODO
        />
      </div>

      <div style={{fontSize: 14, fontWeight: '400'}}>{caption}</div>
    </div>
  )
}

export default SkillItem2
