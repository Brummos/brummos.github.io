// TODO redundant because of next-themes

export type Theme = 'light' | 'dark'

export type ThemeState = {
  theme: Theme
  toggleTheme: () => void
}
