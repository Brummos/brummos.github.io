import {defineRouting} from 'next-intl/routing'
import {SupportedLocale} from '@/types'

const getLocales = (): Array<string> => {
  return Object.values(SupportedLocale).map(locale => locale.toLowerCase())
}

export const routing = defineRouting({
  locales: getLocales(),
  defaultLocale: SupportedLocale.ENGLISH.toLocaleLowerCase()
})
