import {FC, ReactElement} from 'react'
import {Moon, Sun} from 'lucide-react'
import {useTheme} from 'next-themes'

const ThemeToggle: FC = (): ReactElement => {
  const {setTheme, resolvedTheme} = useTheme()

  const onThemeChange = async (): Promise<void> => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div style={{cursor: 'pointer', width: 'fit-content'}} onClick={onThemeChange}>
      {resolvedTheme === 'light' ? <Sun /> : <Moon />}
    </div>
  )
}

export default ThemeToggle
