import React, {CSSProperties, FC, ReactElement} from 'react'
import SkillItem from '@/components/SkillItem'
import SkillItem2 from '@/components/SkillItem2'

type Props = {
  skills: Array<string>
  style?: CSSProperties
}

const SkillsView: FC<Props> = (props: Props): ReactElement => {
  const {skills, style} = props

  return (
    <div
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'row',
        maxWidth: 600,
        flexWrap: 'wrap',
        gap: '15px 10px'

        // display: 'flex',
        // alignItems: 'flex-start',
        // alignContent: 'flex-start',
        // flexWrap: 'wrap',
        // gap: '20px 15px',
      }}
    >
      {skills.map(skill => (
        <SkillItem key={skill} caption={skill} />
      ))}
    </div>
  )
}

export default SkillsView
