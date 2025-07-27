import React, {CSSProperties, forwardRef, ReactElement, Ref, useTransition} from 'react'
import {useParams} from 'next/navigation'
import {usePathname, useRouter} from '@/i18n/navigation'
import LocaleField from '@/components/LocaleField'
import {SupportedLocale} from '@/types'

type Props = {
  ref?: Ref<HTMLDivElement>
  style?: CSSProperties
}

const LocaleMenu = forwardRef<HTMLDivElement, Props>(function LocaleMenu(props, ref): ReactElement {
  const {style} = props
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  const onClick = async (countryCode: SupportedLocale): Promise<void> => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: countryCode.toLocaleLowerCase(), scroll: false}
      )
    })
  }

  return (
    <div
      {...(ref && {ref})}
      style={{
        ...style,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20
      }}
      onClick={(e): void => e.stopPropagation()}
    >
      {Object.entries(SupportedLocale).map(([key, value]) => (
        <LocaleField
          style={{...(isPending && {opacity: 0.5})}} // TODO theme var (tailwind)
          key={key}
          locale={value}
          {...(!isPending && {onClick})}
        />
      ))}
    </div>
  )
})

export default LocaleMenu
