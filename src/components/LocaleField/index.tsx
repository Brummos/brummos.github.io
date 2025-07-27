import React, {CSSProperties, FC, ReactElement} from 'react'
import NetherlandsFlag from '@/components/assets/flags/NetherlandsFlag'
import BrazilFlag from '@/components/assets/flags/BrazilFlag'
import UnitedStatesFlag from '@/components/assets/flags/UnitedStatesFlag'
import SpainFlag from '@/components/assets/flags/SpainFlag'
import GermanyFlag from '@/components/assets/flags/GermanyFlag'
import FranceFlag from '@/components/assets/flags/FranceFlag'
import PortugueseFlag from '@/components/assets/flags/PortugueseFlag'
import RussiaFlag from '@/components/assets/flags/RussiaFlag'
import JapanFlag from '@/components/assets/flags/JapanFlag'
import SouthKoreaFlag from '@/components/assets/flags/SouthKoreaFlag'
import ChinaFlag from '@/components/assets/flags/ChinaFlag'
import ItalyFlag from '@/components/assets/flags/ItalyFlag'
import {SupportedLocale} from '@/types'

type Props = {
  locale: SupportedLocale
  showLocaleCaption?: boolean
  onClick?: (countryCode: SupportedLocale) => Promise<void>
  style?: CSSProperties
}

const LocaleField: FC<Props> = (props: Props): ReactElement => {
  const {locale, onClick, showLocaleCaption = true, style} = props

  const getLocaleFlag = (locale: SupportedLocale): ReactElement => {
    switch (locale) {
      case SupportedLocale.DUTCH:
        return <NetherlandsFlag />
      case SupportedLocale.ENGLISH:
        return <UnitedStatesFlag />
      case SupportedLocale.BRAZILIAN_PORTUGUESE:
        return <BrazilFlag />
      case SupportedLocale.SPANISH:
        return <SpainFlag />
      case SupportedLocale.GERMAN:
        return <GermanyFlag />
      case SupportedLocale.FRENCH:
        return <FranceFlag />
      case SupportedLocale.PORTUGUESE:
        return <PortugueseFlag />
      case SupportedLocale.RUSSIAN:
        return <RussiaFlag />
      case SupportedLocale.JAPANESE:
        return <JapanFlag />
      case SupportedLocale.KOREAN:
        return <SouthKoreaFlag />
      case SupportedLocale.CHINESE:
        return <ChinaFlag />
      case SupportedLocale.ITALIAN:
        return <ItalyFlag />
      default:
        return <div />
    }
  }

  return (
    <div
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
        cursor: 'pointer',
        userSelect: 'none'
      }}
      {...(onClick && {onClick: () => onClick(locale)})}
    >
      <div style={{borderRadius: 4, overflow: 'hidden'}}>{getLocaleFlag(locale)}</div>
      {showLocaleCaption && <span style={{fontWeight: '500', fontSize: 15, whiteSpace: 'nowrap'}}>{locale}</span>}
    </div>
  )
}

export default LocaleField
