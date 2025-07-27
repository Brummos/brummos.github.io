import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
import {StorageKey, ThemeState} from '@/types'

// redundant because of next-themes

const useTheme = create<ThemeState>()(
  persist(
    set => ({
      theme: 'light',
      toggleTheme: () =>
        set(state => ({
          theme: state.theme === 'light' ? 'dark' : 'light'
        }))
    }),
    {
      name: StorageKey.THEME,
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export default useTheme
