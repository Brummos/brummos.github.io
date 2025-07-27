import React, {CSSProperties, FC, ReactElement, useState} from 'react'
import PrimaryButton from '@/components/PrimaryButton'
import Experiences from '@/config/experience.json'
import SkillsView from '@/components/SkillsView'

type Props = {
  style?: CSSProperties
}

enum Experience {
  // TODO redundant because of next-themes
  FRONTEND = 'FRONTEND',
  BACKEND = 'BACKEND',
  OTHER = 'OTHER'
}

const ExperienceView: FC<Props> = (props: Props): ReactElement => {
  const {style} = props
  const [selectedExperience, setSelectedExperience] = useState<Experience>(Experience.FRONTEND)

  return (
    <div style={{...style, display: 'flex', gap: 30, flexDirection: 'column', alignItems: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'row', gap: 15}}>
        <PrimaryButton caption={formatExperience(Experience.FRONTEND)} onClick={async () => setSelectedExperience(Experience.FRONTEND)} />
        <PrimaryButton caption={formatExperience(Experience.BACKEND)} onClick={async () => setSelectedExperience(Experience.BACKEND)} />
        <PrimaryButton caption={formatExperience(Experience.OTHER)} onClick={async () => setSelectedExperience(Experience.OTHER)} />
      </div>

      <SkillsView skills={Experiences[selectedExperience.toLocaleLowerCase() as keyof typeof Experiences]} />

      {/*<div>{formatExperience(selectedExperience)}</div>*/}

      {/*<div>{Experiences[selectedExperience.toLocaleLowerCase() as keyof typeof Experiences]}</div>*/}
    </div>
  )
}

const formatExperience = (experience: Experience): string => {
  return experience
    .toLowerCase()
    .split('_')
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ')
}

export default ExperienceView
