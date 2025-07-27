import React, {CSSProperties, FC, ReactElement} from 'react'

type Props = {
  caption: string
  style?: CSSProperties
}

const SkillItem: FC<Props> = (props: Props): ReactElement => {
  const {caption, style} = props

  return (
    <div
      className="bg-[#BCFF83] hover:bg-[#eae7ff] transition-colors duration-200"
      style={{...style, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 4, userSelect: 'none'}}
    >
      {caption}
    </div>
  )
}

export default SkillItem
