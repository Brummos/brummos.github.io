'use client'
import React, {CSSProperties, FC, ReactElement} from 'react'
import {useTranslations} from 'next-intl'
import {Link} from '@/i18n/navigation'
import ThemeToggle from '@/components/ThemeToggle'
import ParallaxHero from '@/components/ParallaxHero'
import useParallaxScroll from '@/hooks/useParallaxScroll'
import LocaleSwitcher from '../../components/LocaleSwitcher'
import PrimaryLink from '@/components/PrimaryLink'
import ExperienceView from '@/components/ExperienceView'
import SkillItem2 from '@/components/SkillItem2'
import FrontendIcon from '@/components/assets/icons/FrontendIcon'
import StickyBox from '@/components/StickyBox'
import Image from 'next/image';
import ChinaFlag from '@/components/assets/flags/ChinaFlag';

type Props = {
  style?: CSSProperties
}

const HomeScreen: FC<Props> = (props: Props): ReactElement => {
  const {style} = props
  const t = useTranslations('HomePage')
  useParallaxScroll()

  return (
    <div style={{...style, gap: 6, display: 'flex', flexDirection: 'column'}}>
      {/*<ParallaxHero />*/}
      {/*<LocaleSwitcher />*/}
      {/*<LanguageField countryCode={SupportedLanguage.BRAZILIAN_PORTUGUESE}/>*/}
      <div>HELLO</div>
      <ThemeToggle />
      <Link href="/card" scroll={false}>
        Open Modal
      </Link>
      <h1>{t('title')}</h1>
      <PrimaryLink caption={'Book a Demo Call'} href="https://smartcards.pro/WHqgNX" target="_blank" />
      <ExperienceView />
      <FrontendIcon size={500} />

      {/*<div style={{display: 'flex', flexDirection: 'row', gap: 10}}>*/}
      {/*    <SkillItem2 caption={'StyleX'} src={"/stylex_icon.png"}/>*/}
      {/*    <SkillItem2 caption={'Version Control'} src={"/version_control_icon.png"}/>*/}

      {/*    <SkillItem2 caption={'Keras'} src={"/keras_logo.png"}/>*/}
      {/*    <SkillItem2 caption={'MLflow'} src={"/logo/mlflow.svg"}/>*/}
      {/*    <SkillItem2 caption={'React'} src={"/logo/react.svg"}/>*/}
      {/*    <SkillItem2 caption={'UX Design'} src={"/logo/ux_design.jpg"}/>*/}

      {/*    <SkillItem2 caption={'HTML'} src={"/logo/html.svg"}/>*/}
      {/*    <SkillItem2 caption={'CSS'} src={"/logo/css.svg"}/>*/}
      {/*    <SkillItem2 caption={'Figma'} src={"/logo/figma.svg"}/>*/}
      {/*</div>*/}
    </div>
  )
}

export default HomeScreen
